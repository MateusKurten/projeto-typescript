import * as express from "express";
import DonorController from "../controllers/DonorController";

const donors = express.Router();
const donorCtrl = new DonorController();

donors.get('/', async (req, res) => {
    const result = await donorCtrl.getDonors();
    res.statusCode = result.status;
    res.json(result);
});

export default donors;