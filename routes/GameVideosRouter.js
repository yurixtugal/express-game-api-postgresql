const express = require ("express");
const GameVideosService = require('../services/GameVideosService');
const {myValidatorHandler} = require('../middlewares/ValidatorHandler');
const {QueryGamesVideoSchema,createGamesVideoSchema, updateGamesVideoSchema, getGamesVideoSchema,createGameVideoGenresSchema,createGameVideoPlatformSchema} = require('../schemas/GamesVideoSchema');

const router = express.Router();
const gameVideosService = new GameVideosService();

router.get('/',
    myValidatorHandler(QueryGamesVideoSchema,'query'),
    async (req, res)=>{
        try{
            const videoGames = await gameVideosService.find(req.query);
            res.json(videoGames);
        } catch(error){
            res.status(404).json({message: error.message});
        }
    });

router.get('/:id',
    myValidatorHandler(getGamesVideoSchema,'params'),
    async (req, res,next)=>{
        try{
            const {id} = req.params
            const videoGame = await gameVideosService.findOne(parseInt(id));
            res.json(videoGame);
        }catch(error){
            next(error);
        }
    });


router.post('/',
    myValidatorHandler(createGamesVideoSchema,'body'),
    async (req, res,next)=>{
        try{ 
            const body = req.body;
            const newGameVideo = await gameVideosService.create(body);
            res.status(201).json(newGameVideo);
        }catch(error){
            next(error);
        }
    });
    
router.post('/add-gameVideos-genres',
    myValidatorHandler(createGameVideoGenresSchema,'body'),
    async (req, res,next)=>{
        try{
            const body = req.body;
            const newGameVideoGenre = await gameVideosService.createGameVideoGenre(body);
            res.status(201).json(newGameVideoGenre);
        }catch(error){
            next(error);
        }    
});

router.post('/add-gameVideos-platforms',
    myValidatorHandler(createGameVideoPlatformSchema,'body'),
    async (req, res,next)=>{
        try {
            const body = req.body;
            const newGameVideoPlatform = await gameVideosService.createGameVideoPlatform(body);
            res.status(201).json(newGameVideoPlatform);
        }catch(error){
            next(error);
        }
});


router.patch('/:id',
    myValidatorHandler(updateGamesVideoSchema,'body'),
    async (req, res,next)=>{
        try{
            const body = req.body;
            const {id} = req.params;
            const videoGame = await gameVideosService.update(parseInt(id),body);
            res.json(videoGame);
        }catch(error){
            next(error);
        }
        
    });

router.delete('/:id',
    myValidatorHandler(getGamesVideoSchema,'params'),
    async (req, res,next)=>{
        try{
            const {id} = req.params;
            const result = await gameVideosService.delete(parseInt(id));
            res.json(result);
        }catch(error){
            next(error);
        }
        
    });


module.exports = router;