import * as express from "express";
import DonationController from "../controllers/DonationController";


const dashboard = express.Router();

const taskCtrl = new DonationController();

dashboard.get('/teste', async (req, res) => {
    const result: object = await taskCtrl.getDataByCountry();
    res.json(result);
});

export default dashboard;