const express = require ('express');
const GenresService = require('../services/GenresService');


const router = express.Router();
const genresService = new GenresService();

router.get('/', async (req, res)=>{
    const genres = await genresService.find();
    res.json(genres);    
});

router.get('/:id',async (req, res,next)=>{
    try{
        const {id} = req.params
        const genre = await genresService.findOne(parseInt(id));
        res.json(genre);
    }catch(error){
        next(error);
    }
});


module.exports = router;