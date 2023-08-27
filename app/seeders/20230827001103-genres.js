'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', [
      {
        name: 'RPG',
      },
      {
        name: 'Sports',
      },
      {
        name: 'First-Person Shooter',
      },
      {
        name: 'Action/Adventure',
      },
      {
        name: 'Racing',
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  }
};
