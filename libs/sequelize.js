const { options } = require('joi');
const {Sequelize} = require('sequelize');
const {config} = require('../config/config')
const setUpModels = require('../db/models')

/*const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`*/

const option = {
    dialect: 'postgres',
    logging: config.isProduction?false:true
}

if (config.isProduction){
    option.ssl = {
        rejectUnauthorized: false,
    }
}

const sequelize = new Sequelize(config.dbUrl,{dialect: 'postgres', logging: true,option}); // Example for postgres

setUpModels(sequelize);

//sequelize.sync();

module.exports = sequelize;