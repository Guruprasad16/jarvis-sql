module.exports = (sequelize,Sequelize) => {

    const Solution = sequelize.define("Solution", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        solutionId: {
            type: Sequelize.STRING(500),
            unique: true,
            allowNull: false
        },
        solutionName: {
            type: Sequelize.STRING(500),
            allowNull: false,
            unique: true,
          },
        solutionViewUrl: {
            type: Sequelize.STRING(500),
            allowNull: false,
        },
        solutionRunUrl: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        solutionTags: {
            type: Sequelize.STRING(500),
            allowNull: false
        }
        })
    return Solution;
    }
