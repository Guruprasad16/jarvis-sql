module.exports = (sequelize,Sequelize) => {

    const Solution = sequelize.define("Solution", {
    
        id: {
            type: Sequelize.INTEGER(1),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        solutionId: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false
        },
        solutionName: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true,
          },
        solutionViewUrl: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        solutionRunUrl: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        solutionTags: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
        })
    return Solution;
    }