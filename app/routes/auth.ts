import * as express from "express";
import { User, Donor } from "../models";
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
            const { email, username, id } = user;

            return res.status(200).send({
                email,
                username,
                id,
                type: 'user'
            });
        }

        return res.status(500).send("Usuário e/ou senha não existem!");
    }

    const donor = await Donor.findOne({ where: { email } });
    if (donor) {
        const verifica = await bcrypt.compare(password, donor.getDataValue('password'));
        if(verifica){
            const { email, name, id } = donor;

            return res.status(200).send({
                email,
                name,
                id,
                type: 'donor'
            });
        }

        return res.status(500).send("Usuário e/ou senha não existem!");
    }

    return res.status(500).send("Usuário e/ou senha não existem!");
});


export default auth;