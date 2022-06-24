const {Pool} = require('pg');
const {config} = require('../config/config')

let URI;
let USER;
let PASSWORD;
if (config.isProduction){
    URI = config.dbUrl;
}else{
    USER = encodeURIComponent(config.dbUser);
    PASSWORD = encodeURIComponent(config.dbPassword);
    URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
}



const pool = new Pool({connectionString: URI});

module.exports = pool;