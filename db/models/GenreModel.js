const {Model, DataTypes, Sequelize} = require('sequelize');

const GENRE_TABLE = 'genre';

const GenreSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING(300)
    }
}

class Genre extends Model {
    
    static associate(models){
      this.belongsToMany(models.GameVideo, {
            through:models.GameVideoGenre
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GENRE_TABLE,
            modelName: 'Genre',
            timestamps: false
        }
    }

}

module.exports= {GENRE_TABLE,GenreSchema,Genre}