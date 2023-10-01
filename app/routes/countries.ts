import * as express from "express";
import { Country } from "../models";
import CountryController from "../controllers/CountryController";

const countries = express.Router();
const countryCtrl = new CountryController();

countries.get('/', async (req, res) => {
    const result = await countryCtrl.getCountries();
    res.statusCode = result.status;
    res.json(result);
});

export default countries;
