const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(200);
const image = Joi.string();
const isBlock = Joi.boolean();
const resume = Joi.string();
const generationID = Joi.number().integer();
const developerID = Joi.number().integer();
const gameVideoID = Joi.number().integer();
const genreID = Joi.number().integer();
const platformID = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createGamesVideoSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    isBlock: isBlock.required(),
    resume: resume.required(),
    generationID : generationID.required(),
    developerID : developerID.required(),
})


const updateGamesVideoSchema = Joi.object({
    name: name,
    image: image,
    isBlock: isBlock,
    resume: resume,
    generationID: generationID,
    developerID: developerID
})

const getGamesVideoSchema = Joi.object({
    id: id.required(),  
})

const createGameVideoGenresSchema = Joi.object({
    gameVideoID: gameVideoID.required(),
    genreID: genreID.required()
})

const createGameVideoPlatformSchema = Joi.object({
    gameVideoID: gameVideoID.required(),
    platformID: platformID.required()
})

const QueryGamesVideoSchema = Joi.object({
    limit,
    offset,
    developerID
})


module.exports = {createGamesVideoSchema, updateGamesVideoSchema, getGamesVideoSchema,createGameVideoGenresSchema, createGameVideoPlatformSchema, QueryGamesVideoSchema}