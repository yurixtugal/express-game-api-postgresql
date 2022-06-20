const myFaker = require ('../Util/faker');
const boom = require('@hapi/boom');

class GameVideosService {

    
    constructor(){
        this.gameVideos = [];
        this.generate();
    }

    generate(){
        const limit = 100;
        for (let index = 0; index<limit;index++){
            this.gameVideos.push({
                id:         index,
                name:       myFaker.getGameVideosNameByID(index),
                image:      myFaker.getImageGame(),
                platforms:  {name: myFaker.getPlatFormName()},
                genres:     {name: myFaker.getGenresName()},
                developer:  {name: myFaker.getDeveloperName()},
                isBlock:        Math.round(Math.random())%2===0?true:false
            })
        }
    }

    

    async create(data){
        const newGameVideo = {
            id: this.gameVideos.length,
            ...data
        }
        this.gameVideos.push(newGameVideo);
        return newGameVideo;
    }

    async find(){
        return this.gameVideos;
    }

    async findOne(id){
        const gameVideo = this.gameVideos.find(item => item.id === id);
        if (!gameVideo) {
            throw boom.notFound('Game Video not found');
        }
        if (gameVideo.isBlock){
            throw boom.conflict('Game Video is block');
        }
        return gameVideo;

    }

    async update(id, changes){
        const index = this.gameVideos.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound('Game Video not found');
        }
        const gameVideo =  this.gameVideos[index];
        this.gameVideos[index] = {
            ...gameVideo,
            ...changes
        };
        return this.gameVideos[index];

    }

    async delete(id){
        const index = this.gameVideos.findIndex(item => item.id === id);
        if (index === -1){
            throw boom.notFound('Game Video not found');
        }
        this.gameVideos.splice(index)
        return {message: true};

    }
}

module.exports = GameVideosService;