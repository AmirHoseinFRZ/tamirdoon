const express = require("express");
const { User } = require("./models/User");

const app = express();

require('./startup/db')();

app.get("/", (req, res) => {
  res.send("Hello express !!");
});
app.get("/sync", (req, res) => {
  User.sync({ force: true })
    .then(() => res.send("Table created!"))
    .catch((err) => res.status(500).send("Error: " + err));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
