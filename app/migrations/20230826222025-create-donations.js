'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('donations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      donor: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
              model: 'donors',
              key: 'id'
          }
      },
      value: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
      },
      date: {
          type: Sequelize.DATE,
          allowNull: false,
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
    await queryInterface.dropTable('donations');
  }
};
