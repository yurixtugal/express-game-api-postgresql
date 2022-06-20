const myFaker = require ("../Util/faker");
const boom = require('@hapi/boom');

class DevelopersService {

    constructor(){
        this.developers = [];
        this.generate();
    }

    generate(){
        
        const limit = 100;
        for (let index = 0; index<limit;index++){
            this.developers.push({
                id:             index,
                name:           myFaker.getDeveloperNameByID(index),
                resume:         myFaker.getDeveloperResumeByID(index),
                web_site:       myFaker.getDeveloperWebSiteByID(index),
                creation_date:  1990+index});
        }
    }

    async find(){
        return this.developers;
    }

    async findOne(id){
        const developer = this.developers.find(item => item.id === id);
        if (!developer){
            throw boom.notFound('Developer not found'); 
        }
        return developer;
    }
}

module.exports = DevelopersService;