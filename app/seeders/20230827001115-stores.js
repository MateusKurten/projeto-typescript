'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stores', [
      {
        name: 'Steam',
      },
      {
        name: 'Epic Games',
      },
      {
        name: 'GOG.com',
      },
      {
        name: 'Origin',
      },
      {
        name: 'Battle.net',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stores', null, {});
  }
};
