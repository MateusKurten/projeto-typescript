import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';

const sequelize = new Sequelize(`mysql://${process.env.MYSQLDB_USER}:${process.env.MYSQLDB_ROOT_PASSWORD}@mysqldb:${process.env.MYSQLDB_DOCKER_PORT}/${process.env.MYSQLDB_DATABASE}`, {
    dialect: 'mysql',
});

mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@mongo:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`, {
    family: 4,
})
const mongoDb = mongoose.connection;

export  {
    sequelize,
    mongoDb
}