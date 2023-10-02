'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: new Sequelize.STRING(128),
        allowNull: false
      },
      email: {
        type: new Sequelize.STRING(70),
        allowNull: false,
        unique: true
      },
      password: {
        type: new Sequelize.STRING(256),
        allowNull: false
      },
      country: {
        type: Sequelize.INTEGER,
        references: {
          model: 'countries',
          key: 'id'
        }
      },
      admin: {
        type: new Sequelize.BOOLEAN
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};