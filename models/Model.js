module.exports = (sequelize,Sequelize) => {

    const Model = sequelize.define("Model", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        modelId: {
            type: Sequelize.STRING(500),
            unique: true,
            allowNull: false
        },
        modelName: {
            type: Sequelize.STRING(500),
            allowNull: false,
            unique: true,
          },
        modelViewUrl: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        modelRunUrl: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        modelTags: {
            type: Sequelize.STRING(500),
            allowNull: false
        }
        })
    return Model;
    }
