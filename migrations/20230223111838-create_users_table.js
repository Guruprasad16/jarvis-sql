'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   return queryInterface.createTable("Users",{

    id: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        autoIncrement: true,
        PRIMARYKEY: true,
    },
    username: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
        vaidate: {
            isAlphanumeric: true,
            notEmpty: true,
            min: 5,
            max: 15,
            msg: "Username should not be empty and minimum of 5 characters"
        }
      },
    password: {
        type: Sequelize.STRING(40),
        allowNull: false,
        vaidate: {
            len: {
                args: [7,25],
                msg: "The password should be between of 8 to 25 charcters"
            }
        }
    },
    email: {
        type: Sequelize.STRING(40),
        allowNull: false,
        isEmail: true,
        vaidate: {
            max: 50,
            msg: "Email should not exceed 50 characters"
        }
    },
    timestamps: true

})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
   return queryInterface.dropTable("Users");
  }
};
