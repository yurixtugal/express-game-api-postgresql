const {Pool} = require('pg');
const {config} = require('../config/config')

let URI;
let USER;
let PASSWORD;
let options = {}
if (config.isProduction){
    URI = config.dbUrl;
    options.connectionString = config.dbUrl;
    options.ssl = {
        rejectUnauthorized: false
    }
}else{
    USER = encodeURIComponent(config.dbUser);
    PASSWORD = encodeURIComponent(config.dbPassword);
    URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
    options.connectionString: URI,
}



const pool = new Pool(options);

module.exports = pool;