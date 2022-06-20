const express = require ('express');
const DevelopersService = require('../services/DevelopersService');


const router = express.Router();
const developersService = new DevelopersService();


router.get('/', async (req, res)=>{
    const developers = await developersService.find();
    res.json(developers);
});

router.get('/:id', async(req, res,next)=>{
    try{
        const {id} = req.params
        const developer = await developersService.findOne(parseInt(id));
        res.json(developer);
    } catch(error){
        next(error);
    }
});



module.exports = router;