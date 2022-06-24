const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');
const {models } = require('../libs/sequelize');

class DevelopersService {

    constructor(){
  
    }


    async find(){
        const rta = await models.Developer.findAll();
        return  rta;
    }

    async findOne(id){
        const developer = models.Developer.findByPk(id,{
            include:['GameVideo']
        });
        if (!developer){
            throw boom.notFound('Developer not found'); 
        }
        return developer;
    }
}

module.exports = DevelopersService;