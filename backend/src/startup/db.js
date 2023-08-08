const { sequelize } = require("../../config/db.js");

module.exports = function (){
    sequelize
        .authenticate()
        .then(() => console.log("Connected to the database ..."))
        .catch((err) => console.log("Can't connect to the database. Error: " + err));
}
