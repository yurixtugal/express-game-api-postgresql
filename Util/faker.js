class myFaker {

    constructor(){
    
    }

    getImageGame = ()=>{
        return 'https://m.media-amazon.com/images/I/51zIGGHOABL.jpg';
    }

    getGameVideosName = ()=> {
        return 'Nombre generico de video juego';
    }

    getGameVideosNameByID = (id)=>{
        return `Nombre generico de video juego - ${id}`;
    }

    getPlatFormName = ()=>{
        return 'Nombre generico de plataforma';
    }

    getPlatFormNameByID = (id)=>{
        return `Nombre generico de plataforma - ${id}`;
    }


    getPlatFormAlternativeName = ()=>{
        return 'Nombre alternativo de plataforma';
    }

    getPlatFormAlternativeNameByID = (id)=>{
        return `Nombre alternativo de plataforma - ${id}`;
    }

    getPlatFormResume = ()=>{
        return 'Resumen generico de plataforma';
    }

    getPlatFormResumeByID = (id)=>{
        return `Resumen generico de plataforma - ${id}`;
    }

    getDeveloperName = ()=>{
        return 'Nombre generico de developer';
    }

    getDeveloperNameByID = (id)=>{
        return `Nombre generico de developer - ${id}`;
    }


    getDeveloperResume = ()=>{
        return 'Resumen generico del developer';
    }

    getDeveloperResumeByID = (id)=>{
        return `Resumen generico del developer - ${id}`;
    }

    getDeveloperWebSite = ()=>{
        return 'https://wikipedia.org';
    }

    getDeveloperWebSiteByID = (id)=>{
        return `https://wikipedia.org/wiki/${id}`;
    }
        
    

    getGenresName = ()=>{
        return 'Nombre generico de Genero';
    }

    getGenresNameByID = (id)=>{
        return `Nombre generico de Genero - ${id}`;
    }

}

module.exports = new myFaker();