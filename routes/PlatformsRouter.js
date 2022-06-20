const express = require ('express');
const myFaker = require ("../Util/faker");
const PlatformsService = require('../services/PlatformsService');


const router = express.Router();
const platformsService = new PlatformsService();

router.get('/',async (req, res)=>{
   platforms = await platformsService.find();
   res.json(platforms);
});
router.get('/:id',async (req, res, next)=>{
   try {
      const {id} = req.params;
      platform = await platformsService.findOne(parseInt(id));
      res.json(platform);
   }catch(error){
      next(error);
   }
});


module.exports = router;