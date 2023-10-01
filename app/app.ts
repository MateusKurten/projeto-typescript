import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import * as AdminJSMongoose from '@adminjs/mongoose'
import { User, Country, Donation, Chat} from './models';
import express from 'express';
import session from 'express-session';
import { generateResource } from './utils/modeling-model';
import { encryptPassword } from './utils/user-utils';
import bcrypt from "bcrypt";
import { sequelize } from './db';
import dashboard from './routes/dashboard';
import chat from './routes/chat';
import auth from './routes/auth';
import users from './routes/users';
import countries from './routes/countries';
import hbs from 'hbs';
import { SocketDataChat } from './interfaces/SocketInterface';
import http from 'http';
import { Server } from "socket.io";
import ChatController from './controllers/ChatController';

const path = require('node:path');
const ROOT_DIR = __dirname;
const bodyParser = require('body-parser');

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database
});

const PORT = process.env.NODE_DOCKER_PORT;

const mysqlStore = require('express-mysql-session')(session);

const start = async () => {
  const app = express();
  const server = http.createServer(app);
  const io: any = new Server<SocketDataChat>(server);

  sequelize.sync().catch((err) => {
    console.log(err);
  });

  const admin = new AdminJS({
    resources: [
      generateResource(User, {
        password: {
          type: 'password',
          isVisible: {
            add: true, list: false, edit: true, filter: false, show: false
          }
        },
      }, {
        new: {
          before: async (request: any) => {
            return encryptPassword(request);
          }
        },
        edit: {
          before: async (request: any) => {
            return encryptPassword(request);
          }
        },
      }),
      generateResource(Country),
      generateResource(Donation),
      generateResource(Chat)
    ],
    branding: {
      companyName: "My Project Donations"
    },
    dashboard: {
      component: AdminJS.bundle('./components/dashboard.jsx')
    },
  })

  const sessionStore = new mysqlStore({
    connectionLimit: 10,
    password: process.env.MYSQLDB_ROOT_PASSWORD,
    user: process.env.MYSQLDB_USER,
    database: process.env.MYSQLDB_DATABASE,
    host: "mysqldb",
    port: process.env.MYSQLDB_DOCKER_PORT,
    createDatabaseTable: true
  });

  const secret = 'SLRV1ahxCbOqqP39DNsI9r3EKCn8KRIZ';
  const cookieName = 'adminjs';

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email: string, password: string) => {
        const user = await User.findOne({ where: { email, admin: true } });
        if (user) {
          const verifica = await bcrypt.compare(password, user.getDataValue('password'));
          if(verifica){
            return user;
          }
          return false;
        }
        return false;
      },
      cookieName: cookieName,
      cookiePassword: secret
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: secret,
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production'
      },
      name: cookieName
    }
  );

  hbs.registerPartials(path.join(ROOT_DIR, 'views'));
  app.set('view engine', '.hbs');
  app.use(express.static('public'));
  app.use(admin.options.rootPath, adminRouter);
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/dashboard', dashboard);
  app.use('/auth', auth);
  app.use('/', chat);
  app.use('/users', users);
  app.use('/countries', countries);

  const chatCtrl = new ChatController();
  io.on('connection', (socket: any) => {
    console.log("Usuário se conectou.");

    socket.on('SEND_MESSAGE', (data: any) => {
      const { message, user_sender, user_receptor } = data;
      chatCtrl.sendMessage(message, user_sender, user_receptor)
      io.emit('RECEIVE_MESSAGE', data)
    });

    socket.on("disconnect", (reason: any) => {
      console.log("Desconectou");
    });
  })

  server.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

start()