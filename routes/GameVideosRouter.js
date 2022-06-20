const express = require ("express");
const GameVideosService = require('../services/GameVideosService');
const {myValidatorHandler} = require('../middlewares/ValidatorHandler');
const {createGamesVideoSchema, updateGamesVideoSchema, getGamesVideoSchema} = require('../schemas/GamesVideoSchema');

const router = express.Router();
const gameVideosService = new GameVideosService();

router.get('/',async (req, res)=>{
    try{
        const videoGames = await gameVideosService.find();
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
    async (req, res)=>{
        const body = req.body;
        const newGameVideo = await gameVideosService.create(body);
        res.status(201).json(newGameVideo);
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