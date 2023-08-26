'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: new Sequelize.STRING(128),
          allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'genres',
            key: 'id'
        }
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'stores',
            key: 'id'
        }
      },
      platformId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'platforms',
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
    await queryInterface.dropTable('games');
  }
};
