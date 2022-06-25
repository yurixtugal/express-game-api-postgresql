'use strict';

const {GENRE_TABLE,GenreSchema} = require("../models/GenreModel");
const {DEVELOPER_TABLE,DeveloperSchema} = require("../models/DeveloperModel");
const {PLATFORM_TABLE,PlatformSchema} = require("../models/PlatformModel");
const {GAMEVIDEO_TABLE,GameVideoSchema} = require("../models/GameVideoModel");
const {GENERATION_TABLE, GenerationSchema} = require("../models/GenerationModel");
const {GAMEVIDEO_GENRE_TABLE, GameVideoGenreSchema} = require("../models/GameVideoGenreModel");
const {GAMEVIDEO_PLATFORM_TABLE, GameVideoPlatformSchema} = require("../models/GameVideoPlatformModel");

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(GENRE_TABLE,GenreSchema);
    await queryInterface.createTable(DEVELOPER_TABLE,DeveloperSchema);
    await queryInterface.createTable(PLATFORM_TABLE,PlatformSchema);
    await queryInterface.createTable(GENERATION_TABLE,GenerationSchema);
    await queryInterface.createTable(GAMEVIDEO_TABLE,GameVideoSchema);
    await queryInterface.createTable(GAMEVIDEO_GENRE_TABLE,GameVideoGenreSchema);
    await queryInterface.createTable(GAMEVIDEO_PLATFORM_TABLE,GameVideoPlatformSchema);
    
  },

  async down (queryInterface) {
    await queryInterface.dropTable(GENRE_TABLE);
    await queryInterface.dropTable(DEVELOPER_TABLE);
    await queryInterface.dropTable(PLATFORM_TABLE);
    await queryInterface.dropTable(GAMEVIDEO_TABLE);
    await queryInterface.dropTable(GAMEVIDEO_GENRE_TABLE);
    await queryInterface.dropTable(GENERATION_TABLE);
  }
  
};