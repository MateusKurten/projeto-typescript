'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('platforms', [
      {
        name: 'PC',
      },
      {
        name: 'Nintendo Switch',
      },
      {
        name: 'PS5',
      },
      {
        name: 'Nintendo 3DS',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('platforms', null, {});
  }
};
