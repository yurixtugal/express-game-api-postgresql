const boom = require('@hapi/boom');
const {models } = require('../libs/sequelize');

class GameVideosService {

    
    constructor(){}

    async create(data){
       const newGameVideo = await models.GameVideo.create(data);
       return newGameVideo;
    }

    

    async createGameVideoPlatform(data){
        const newGameVideoPlatform = await models.GameVideoPlatform.create(data);
        return newGameVideoPlatform;
     }

   async createGameVideoGenre(data){
        const newGameVideoGenre = await models.GameVideoGenre.create(data);
        return newGameVideoGenre;
     }

    async find(query){
        //console.log(models.GameVideo.findAll());
        const options = {
            include: ['Generation','Developer','genres','platforms'],
            where:{}
        }
        const {limit, offset,developerID } = query;
        if (limit && offset){
            options.limit = limit;
            options.offset = offset
        }
        if (developerID){
            options.where.developerID = developerID;
        }
        const rta = await models.GameVideo.findAll(options);
        return  rta;
    }

    async findOne(id){
        const gameVideo = await models.GameVideo.findByPk(id,{
            include: ['Generation','Developer','genres','platforms']
            
        });
        if (!gameVideo) {
            throw boom.notFound('Game Video not found');
        }
        if (gameVideo.isBlock){
            throw boom.conflict('Game Video is block');
        }
        return gameVideo;
    }

    async update(id, changes){
        const newGameVideo = await this.findOne(id);
        const rta = await newGameVideo.update(changes);        
        return rta;
    }

    async delete(id){
        const newGameVideo = await this.findOne(id);
        const rta = await newGameVideo.destroy();       
        return rta;
    }
}

module.exports = GameVideosService;
