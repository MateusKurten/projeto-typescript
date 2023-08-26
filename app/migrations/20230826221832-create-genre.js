'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('genres', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: new Sequelize.STRING(128),
          allowNull: false
      },
      createdAt: {
          type: new Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
      },
      updatedAt: {
          type: new Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('genres');
  }
};
