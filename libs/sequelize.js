const {Sequelize} = require('sequelize');
const {config} = require('../config/config')
const setUpModels = require('../db/models')

/*const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`*/

let options;

 
  
  if (config.isProd) {
    options = {dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
    }
  }else{
    options = {
        dialect: 'postgres',
        logging: config.isProd ? false : true,
      }
  }

const sequelize = new Sequelize(config.dbUrl,options); // Example for postgres

console.log(config.dbUrl);
console.log(options);

setUpModels(sequelize);

//sequelize.sync();

module.exports = sequelize;