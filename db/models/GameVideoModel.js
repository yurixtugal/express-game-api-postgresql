const {Model, DataTypes, Sequelize} = require('sequelize');
const {GENERATION_TABLE} = require('./GenerationModel');

const GAMEVIDEO_TABLE = 'game_video';

const GameVideoSchema = {
    id:{
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING(300)
    },
    resume:{
        allowNull: false,
        type: DataTypes.STRING(3000)
    },
    image:{
        allowNull: false,
        type: DataTypes.STRING(300)
    },
    isBlock:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: 'is_block'
    },
    generationID:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'GenerationId',
        references:{
            model: GENERATION_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    developerID:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'DeveloperId',
        references:{
            model: GENERATION_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class GameVideo extends Model {
    
    static associate(models){
        //console.log(models.Generation);
        this.belongsToMany(models.Genre, {
            through:models.GameVideoGenre,
            as: 'genres', 
            foreignKey: 'GameVideoId',
            otherKey: 'GenreId'
        });
        this.belongsToMany(models.Platform, {
            through:models.GameVideoPlatform,
            as: 'platforms', 
            foreignKey: 'GameVideoId',
            otherKey: 'PlatformId'
        });
        this.belongsTo(models.Generation, {as:'Generation'});
        this.belongsTo(models.Developer, {as:'Developer'});
       
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GAMEVIDEO_TABLE,
            modelName: 'GameVideo',
            timestamps: false
        }
    }

}

module.exports= {GAMEVIDEO_TABLE,GameVideoSchema,GameVideo}