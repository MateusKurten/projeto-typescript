'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('donors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
          type: new Sequelize.STRING(128),
          allowNull: false
      },
      country: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              model: 'countries',
              key: 'id'
          }
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
    await queryInterface.dropTable('donors');
  }
};
