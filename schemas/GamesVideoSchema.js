const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(200);
const image = Joi.string();
const isBlock = Joi.boolean();

const createGamesVideoSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    isBlock: isBlock.required()
})


const updateGamesVideoSchema = Joi.object({
    name: name,
    image: image,
    isBlock: isBlock
})

const getGamesVideoSchema = Joi.object({
    id: id.required()
})

module.exports = {createGamesVideoSchema, updateGamesVideoSchema, getGamesVideoSchema}