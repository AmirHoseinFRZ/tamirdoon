const { Sequelize } = require("sequelize");

const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

if (!DB_HOST || !DB_PORT || !DB_DATABASE || !DB_USERNAME || !DB_PASSWORD) {
  throw new Error(
    "Please provide all necessary environment variables for the database configuration."
  );
}

const sequelize = new Sequelize({
  host: DB_HOST,
  port: +DB_PORT,
  database: DB_DATABASE,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: "mysql",
});

module.exports = { sequelize };
