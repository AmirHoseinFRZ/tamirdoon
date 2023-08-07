const {sequelize} = require("../../configs/db");
const {DataTypes} = require("sequelize");

module.exports = sequelize.define('Image', {
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filepath: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

