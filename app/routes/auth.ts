import * as express from "express";
import { User } from "../models";
import bcrypt from "bcrypt";

const auth = express.Router();

auth.get('/login', async (req, res) => {
    res.render('login')
});

auth.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        const verifica = await bcrypt.compare(password, user.getDataValue('password'));
        if(verifica){
            const { email, name, id, admin } = user;

            return res.status(200).send({
                email,
                name,
                id,
                admin,
            });
        }

        return res.status(500).send("Usuário e/ou senha não existem!");
    }

    return res.status(500).send("Usuário e/ou senha não existem!");
});


export default auth;