module.exports = (sequelize,Sequelize) => {

    const Data = sequelize.define("Data", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        datasetId: {
            type: Sequelize.STRING(500),
            unique: true,
            allowNull: false
        },
        datasetName: {
            type: Sequelize.STRING(500),
            allowNull: false,
            unique: true,
          },
        datasetVersion: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        datasetDescription: {
            type: Sequelize.STRING(500),
            allowNull: false
        }
        })
    return Data;
    }
