'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      {
        title: 'Baldur\'s Gate 3',
        userId: 1,
        genreId: 1,
        storeId: 1,
        platformId: 1
      },
      {
        title: 'Rocket League',
        userId: 1,
        genreId: 2,
        storeId: 1,
        platformId: 1
      },
      {
        title: 'Fifa 23',
        userId: 1,
        genreId: 2,
        storeId: 4,
        platformId: 1
      },
      {
        title: 'Diablo 4',
        userId: 1,
        genreId: 4,
        storeId: 5,
        platformId: 1
      },
      {
        title: 'Zelda: Breath of the Wild',
        userId: 1,
        platformId: 2,
        genreId: 4,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {});
  }
};
