import { Donation } from "../models/donation.entity";
import { Country } from "../models/country.entity";
import { Donor } from "../models/donor.entity";

export default class DonationController {
  async getDataByCountry() {
    const donations = await Donation.findAll({
      include: [{
        model: Donor,
        as: 'modelDonor',
        include: [{
          model: Country,
          as: 'modelCountry',
          attributes: ['name']
        }],
      }],
    });

    var dataByCountry: {[index: string]:any} = {};
    donations.forEach(donation => {
      const country = donation.modelDonor.modelCountry.name;
      const value = donation.value;

      if (!dataByCountry[country]) {
        dataByCountry[country] = 0.00;
      }

      dataByCountry[country] += parseFloat(value.toString());
    })

    const labels = Object.keys(dataByCountry);
    const data = Object.values(dataByCountry);

    return  {
      labels,
      datasets: [
        {
          label: 'Donations ($)',
          data: data,
          backgroundColor: 'rgba(55, 173, 137, 0.8)'
        }
      ]
    };
  }
}