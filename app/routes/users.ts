import * as express from "express";
import UserController from "../controllers/UserController";

const users = express.Router();
const userCtrl = new UserController();

users.get('/', async (req, res) => {
    const returnAdmin = req.query.type == 'admins';
    const result = await userCtrl.getUsers(returnAdmin);
    res.statusCode = result.status;
    res.json(result);
});

export default users;