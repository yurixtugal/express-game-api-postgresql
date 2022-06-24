const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');
const {models } = require('../libs/sequelize');

class PlaformsService {

    constructor(){
        this.platforms = [];
        this.generate();
    }

    generate(){
        
        const limit = 8;
        for (let index = 0; index<limit;index++){
            this.platforms.push({
                id:               index,
                name:             myFaker.getPlatFormNameByID(index),
                resume:           myFaker.getPlatFormResumeByID(index),
                alternative_name: myFaker.getPlatFormAlternativeNameByID(index)});
        }
    }


    async find(){
        const rta = await models.Platform.findAll();
        return  rta;
    }

    async findOne(id){
        const platform = await models.Platform.findByPk(id);
        if (!platform){
            throw boom.notFound('Platform not found'); 
        }
        return platform;
    }

}

module.exports = PlaformsService;