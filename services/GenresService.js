const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');

class GenresService {

    constructor(){
        this.genres = [];
        this.generate();
    }

    generate(){
        
        const limit = 20;
        for (let index = 0; index<limit;index++){
            this.genres.push({
                id:    index,
                name:  myFaker.getGenresNameByID(index)});
        }
    }
    
    async find(){
        return this.genres;
    }

    async findOne(id){
        const genres = this.genres.find(item => item.id === id);
        if (!genres){
            throw boom.notFound('Genres not found'); 
        }
        return genres;
    }

}

module.exports = GenresService;