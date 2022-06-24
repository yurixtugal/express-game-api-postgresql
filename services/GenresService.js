const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');
const {models } = require('../libs/sequelize')


class GenresService {

    constructor(){
    }

    
    async find(){
        const rta = await  models.Genre.findAll();
        return  rta;
    }

    async findOne(id){
        const genres = await models.Genre.findByPk(id);
        if (!genres){
            throw boom.notFound('Genres not found'); 
        }
        return genres;
    }

}

module.exports = GenresService;