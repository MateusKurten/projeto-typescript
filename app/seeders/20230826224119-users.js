'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Admin',
      email: 'admin@gmail.com',
      username: 'admin',
      password: '$2b$10$gTNRVv.pO95aOHjsPJwQ2u306Fhfs9dZeEEEYiRK2LhAjINiDX93q', //admin
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
