import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSSequelize from '@adminjs/sequelize'
import { User } from './models';
import express from 'express';
import session from 'express-session';
import { generateResource } from './utils/modeling-model';
import { encryptPassword } from './utils/user-utils';
import bcrypt from "bcrypt";
import { sequelize } from './db';

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

const PORT = 8080;

const mysqlStore = require('express-mysql-session')(session);

const start = async () => {
  const app = express();
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
        }
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
    ],
    branding: {
      companyName: "Minha biblioteca de jogos"
    }
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
        const user = await User.findOne({ where: { email } });
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

  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

console.log("oi", process.env.MYSQLDB_DATABASE)

start()