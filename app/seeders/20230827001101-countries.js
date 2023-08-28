'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('countries', [
      {
        name: 'Brazil',
      },
      {
        name: 'Germany',
      },
      {
        name: 'United States',
      },
      {
        name: 'France',
      },
      {
        name: 'Italy',
      },
      {
        name: 'Portugal',
      },
      {
        name: 'Spain',
      },
      {
        name: 'Argentina',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', null, {});
  }
};
