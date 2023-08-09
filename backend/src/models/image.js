const {sequelize} = require("../../config/db");
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
},
    {
        tableName: 'images',
    });

