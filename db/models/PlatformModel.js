const {Model, DataTypes, Sequelize} = require('sequelize');

const PLATFORM_TABLE = 'platform';

const PlatformSchema = {
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
        allowNull: true,
        type: DataTypes.STRING(3000)
    },
    alternativeName:{
        allowNull: true,
        type: DataTypes.STRING(300),
        field: 'alternative_name'
    },
}

class Platform extends Model {
    
    static associate(models){
        this.belongsToMany(models.GameVideo, {
            through:models.GameVideoGenre
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: PLATFORM_TABLE,
            modelName: 'Platform',
            timestamps: false
        }
    }

}

module.exports= {PLATFORM_TABLE,PlatformSchema,Platform}