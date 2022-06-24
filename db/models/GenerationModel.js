const {Model, DataTypes, Sequelize} = require('sequelize');

const GENERATION_TABLE = 'generation';

const GenerationSchema = {
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

class Generation extends Model {
    
    static associate(models){
        this.hasMany(models.GameVideo, { as: 'GameVideo', foreignKey:"GenerationId"});
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: GENERATION_TABLE,
            modelName: 'Generation',
            timestamps: false
        }
    }

}

module.exports= {GENERATION_TABLE,GenerationSchema,Generation}