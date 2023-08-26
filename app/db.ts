import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(`mysql://${process.env.MYSQLDB_USER}:${process.env.MYSQLDB_ROOT_PASSWORD}@mysqldb:${process.env.MYSQLDB_DOCKER_PORT}/${process.env.MYSQLDB_DATABASE}`, {
    dialect: 'mysql',
});

export  {
    sequelize
}