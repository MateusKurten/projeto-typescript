'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'donors',
        'email',
        {
          type: new Sequelize.STRING(70),
          allowNull: false,
          unique: true
        },
      ),
      queryInterface.addColumn(
        'donors',
        'password',
        {
          type: new Sequelize.STRING(256),
          allowNull: false
        },
      ),
    ]);
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('donors', 'email'),
      queryInterface.removeColumn('donors', 'password'),
    ]);
  }
};
