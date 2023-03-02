module.exports = (sequelize,Sequelize) => {

    const Model = sequelize.define("Model", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        modelId: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false
        },
        modelName: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
          },
        modelViewUrl: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        modelRunUrl: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        modelTags: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
        })
    return Model;
    }
