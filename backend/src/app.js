const express = require("express");
const { sequelize } = require("../configs/db.js");
const { User } = require("./models/User");

const app = express();

sequelize
  .authenticate()
  .then(() => console.log("Connected to the database ..."))
  .catch((err) => console.log("Can't connect to the database. Error: " + err));

app.get("/", (req, res) => {
  res.send("Hello express !");
});

const PORT = process.env.PORT || 3000;

app.get("/sync", (req, res) => {
  User.sync({ force: true })
    .then(() => res.send("Table created!"))
    .catch((err) => res.status(500).send("Error: " + err));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
