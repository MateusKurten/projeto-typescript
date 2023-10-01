import { Country } from "../models/country.entity";

export default class CountryController {
  async getCountries() {
    const countries = await Country.findAll({
      attributes: ['id', 'name'],
      raw: true,
    });

    return {
      status: 200,
      result: countries
    }
  }
}