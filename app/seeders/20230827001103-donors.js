'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('donors', [
      {
        name: 'Abel',
        country: 1,
      },
      {
        name: 'Bruno',
        country: 1,
      },
      {
        name: 'Carlos',
        country: 1,
      },
      {
        name: 'Chris',
        country: 3,
      },
      {
        name: 'Dan',
        country: 3,
      },
      {
        name: 'Einstein',
        country: 2,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donors', null, {});
  }
};
