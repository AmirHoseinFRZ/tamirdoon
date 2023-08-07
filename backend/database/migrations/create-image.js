const {DataTypes} = require("sequelize");
module.exports = {
    up: async (queryInterface, sequelize) => {
        await queryInterface.createTable('images', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            filename: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            filepath: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('images');
    }
}