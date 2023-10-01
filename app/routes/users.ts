import * as express from "express";
import { User } from "../models";
import UserController from "../controllers/UserController";
import bcrypt from 'bcrypt';

const users = express.Router();
const userCtrl = new UserController();

users.get('/', async (req, res) => {
    const returnAdmin = req.query.type == 'admins';
    const result = await userCtrl.getUsers(returnAdmin);
    res.statusCode = result.status;
    res.json(result);
});

users.get('/register', async (req, res) => {
    res.render('register');
});

users.post('/create', async (req, res) => {
    try {
        const { name, email, password, country } = req.body;
        const user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            country,
            admin: false
        });

        res.status(201).json(user);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Cannot create user (error)' });
    }
});

export default users;