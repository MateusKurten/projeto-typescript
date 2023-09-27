import * as express from "express";

const chat = express.Router();

chat.get('/', async (req, res) => {
    res.render('chat')
});

export default chat;