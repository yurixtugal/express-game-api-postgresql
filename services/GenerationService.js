const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');
const {models } = require('../libs/sequelize')


class GenerationsService {

    constructor(){
        
    }

    async find(){
        
        const rta = await models.Generation.findAll();
        return  rta;
    }

    async findOne(id){
        const generation = await models.Generation.findByPk(id,{
            include:['GameVideo']
        });
        if (!generation){
            throw boom.notFound('Generatioins not found'); 
        }
        return generation;
    }

}

module.exports = GenerationsService;