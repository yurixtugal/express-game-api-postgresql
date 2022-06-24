const {Model, DataTypes, Sequelize} = require('sequelize');
const {PLATFORM_TABLE} = require('./PlatformModel');
const {GAMEVIDEO_TABLE} = require('./GameVideoModel');

const GAMEVIDEO_PLATFORM_TABLE = 'gamevideo_platform';

const GameVideoPlatformSchema = {
    id:{
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    platformID:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'PlatformId',
        references:{
            model: PLATFORM_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    gameVideoID:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'GameVideoId',
        references:{
            model: GAMEVIDEO_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class GameVideoPlatform extends Model {
    
    static associate(models){
        //console.log(models.Generation);
        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GAMEVIDEO_PLATFORM_TABLE,
            modelName: 'GameVideoPlatform',
            timestamps: false
        }
    }

}

module.exports= {GAMEVIDEO_PLATFORM_TABLE,GameVideoPlatformSchema,GameVideoPlatform}