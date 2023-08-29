'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('donations', [
      {
        value: 1000,
        donor: 1,
        date: '2023-08-10 03:00:00',
      },
      {
        value: 5000,
        donor: 1,
        date: '2023-07-10 03:00:00',
      },
      {
        value: 2000,
        donor: 2,
        date: '2023-08-10 03:00:00',
      },
      {
        value: 1000,
        donor: 3,
        date: '2023-06-10 03:00:00',
      },
      {
        value: 2400,
        donor: 5,
        date: '2023-06-12 03:00:00',
      },
      {
        value: 1500,
        donor: 4,
        date: '2023-08-12 03:00:00',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donations', null, {});
  }
};
