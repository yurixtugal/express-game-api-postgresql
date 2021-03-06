const express = require('express');

const developersRouter = require('./DevelopersRouter');
const gameVideoRouter = require('./GameVideosRouter');
const genresRouter = require('./GenresRouter');
const platformsRouter = require('./PlatformsRouter');
const generationsRouter = require('./GenerationsRouter');

const routerApi = (app) =>{

    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/Developers',developersRouter);
    router.use('/GameVideos',gameVideoRouter);
    router.use('/Genres',genresRouter);
    router.use('/Platforms',platformsRouter);
    router.use('/Generations',generationsRouter);
}

module.exports = routerApi;