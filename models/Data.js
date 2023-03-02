module.exports = (sequelize,Sequelize) => {

    const Data = sequelize.define("Data", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        datasetId: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false
        },
        datasetName: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
          }
        })
    return Data;
    }
