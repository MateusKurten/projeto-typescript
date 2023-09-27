import { Donor } from "../models/donor.entity";

export default class DonorController {
  async getDonors() {
    const donors = await Donor.findAll({
      raw: true,
    });

    return {
      status: 200,
      result: donors
    }
  }
}