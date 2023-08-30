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
        country: 7,
      },
      {
        name: 'Carlos',
        country: 8,
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
      {
        name: 'Victor',
        country: 6,
      },
      {
        name: 'Isabella',
        country: 5,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donors', null, {});
  }
};
