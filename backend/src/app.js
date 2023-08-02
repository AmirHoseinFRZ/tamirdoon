const express = require("express");
const { User } = require("./models/User");

const app = express();

require('./startup/db')();
require('./startup/routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.`);
});
