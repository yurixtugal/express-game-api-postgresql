const {Model, DataTypes, Sequelize} = require('sequelize');
const {GENRE_TABLE} = require('./GenreModel');
const {GAMEVIDEO_TABLE} = require('./GameVideoModel');

const GAMEVIDEO_GENRE_TABLE = 'gamevideo_genre';

const GameVideoGenreSchema = {
    id:{
        allowNull: false, 
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    genreID:{
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'GenreId',
        references:{
            model: GENRE_TABLE,
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

class GameVideoGenre extends Model {
    
    static associate(models){
        //console.log(models.Generation);
        
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GAMEVIDEO_GENRE_TABLE,
            modelName: 'GameVideoGenre',
            timestamps: false
        }
    }

}

module.exports= {GAMEVIDEO_GENRE_TABLE,GameVideoGenreSchema,GameVideoGenre}