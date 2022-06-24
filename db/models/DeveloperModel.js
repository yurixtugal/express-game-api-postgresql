const {Model, DataTypes, Sequelize} = require('sequelize');

const DEVELOPER_TABLE = 'developer';

const DeveloperSchema = {
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
    webSite:{
        allowNull: true,
        field: 'web_site',
        type: DataTypes.STRING(300)
        
    },
    creationDate:{ 
        allowNull: false,
        type: DataTypes.DATE,
        field: 'creation_date',
        defaultValue: Sequelize.NOW
    },
}

class Developer extends Model {
    
    static associate(models){
        this.hasMany(models.GameVideo, { as: 'GameVideo', foreignKey:"DeveloperId"});
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: DEVELOPER_TABLE,
            modelName: 'Developer',
            timestamps: false
        }
    }

}

module.exports= {DEVELOPER_TABLE,DeveloperSchema,Developer}