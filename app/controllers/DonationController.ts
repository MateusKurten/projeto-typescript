import { Donation } from "../models/donation.entity";
import { Country } from "../models/country.entity";

export default class DonationController {
  async getDataByCountry() {
    const countries = Country.findAll();
    return countries;

    // return  {
    //   labels: labels,
    //   data: {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Tarefas Feitas',
    //         data: data[0],
    //         backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //       },
    //       {
    //         label: 'Tarefas em aberto',
    //         data: data[1],
    //         backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //       },
    //     ],
    //   }
    // }
  }
}