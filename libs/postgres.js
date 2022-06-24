const {Client} = require('pg');

const getConnection = async ()=>{

    const client = new Client({
        host:'172.19.0.2',
        port:5432,
        user:'admin',
        password: 'admin123',
        database: 'my_games'});
    
    await client.connect();
    return client;
}

module.exports = getConnection;

