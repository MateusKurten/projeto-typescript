'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Admin',
      email: 'admin@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin: true
    },
    {
      name: 'Abel',
      country: 1,
      email: 'abel@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Bruno',
      country: 7,
      email: 'bruno@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Carlos',
      country: 8,
      email: 'carlos@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Chris',
      country: 3,
      email: 'chris@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Dan',
      country: 3,
      email: 'dan@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Einstein',
      country: 2,
      email: 'einstein@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Victor',
      country: 6,
      email: 'victor@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    },
    {
      name: 'Isabella',
      country: 5,
      email: 'isabela@gmail.com',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
      admin:false,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
