'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('donors', [
      {
        name: 'Abel',
        country: 1,
        email: 'abel@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Bruno',
        country: 7,
        email: 'bruno@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Carlos',
        country: 8,
        email: 'carlos@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Chris',
        country: 3,
        email: 'chris@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Dan',
        country: 3,
        email: 'dan@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Einstein',
        country: 2,
        email: 'einstein@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
      {
        name: 'Victor',
        country: 6,
        email: 'victor@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin 
      },
      {
        name: 'Isabella',
        country: 5,
        email: 'isabela@gmail.com',
        password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('donors', null, {});
  }
};
