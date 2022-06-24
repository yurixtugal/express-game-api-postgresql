const express = require ('express');
const GenerationService = require('../services/GenerationService');


const router = express.Router();
const generationService = new GenerationService();

router.get('/',async (req, res)=>{
  
   generation = await generationService.find();
   res.json(generation);
});

router.get('/:id',async (req, res, next)=>{
   try {
      const {id} = req.params;
      generation = await generationService.findOne(parseInt(id));
      res.json(generation);
   }catch(error){
      next(error);
   }
});


module.exports = router;