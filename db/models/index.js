const {GenreSchema,Genre} = require('./GenreModel');
const {PlatformSchema, Platform} = require('./PlatformModel');
const {DeveloperSchema, Developer} = require('./DeveloperModel');
const {GameVideoSchema, GameVideo} = require('./GameVideoModel');
const {GenerationSchema, Generation} = require('./GenerationModel');
const {GameVideoGenreSchema, GameVideoGenre} = require('./GameVideoGenreModel');
const {GameVideoPlatformSchema, GameVideoPlatform} = require('./GameVideoPlatformModel');

const setUpModels = (sequelize) => {
    Genre.init(GenreSchema,Genre.config(sequelize));
    Platform.init(PlatformSchema,Platform.config(sequelize));
    Developer.init(DeveloperSchema,Developer.config(sequelize));
    Generation.init(GenerationSchema,Generation.config(sequelize));
    GameVideo.init(GameVideoSchema,GameVideo.config(sequelize));
    GameVideoGenre.init(GameVideoGenreSchema,GameVideoGenre.config(sequelize));
    GameVideoPlatform.init(GameVideoPlatformSchema,GameVideoPlatform.config(sequelize));
    
    Developer.associate(sequelize.models);
    Genre.associate(sequelize.models);
    GameVideo.associate(sequelize.models);
    Generation.associate(sequelize.models);
    
}

module.exports = setUpModels;