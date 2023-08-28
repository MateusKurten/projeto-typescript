'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('donations', [
      {
        value: 1000,
        donor: 1
      },
      {
        value: 5000,
        donor: 1
      },
      {
        value: 2000,
        donor: 2
      },
      {
        value: 1000,
        donor: 3
      },
      {
        value: 2400,
        donor: 5
      },
      {
        value: 1500,
        donor: 4
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donations', null, {});
  }
};
