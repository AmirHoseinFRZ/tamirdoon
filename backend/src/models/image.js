const {sequelize} = require("../../configs/db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define('Image', {
    imageId: {
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

