const express = require("express");
require("./helpers/dbConnection");

const app = express();

const PORT = 2222;
app.listen(PORT, () => {
  console.log("Server has Started -> http://localhost:" + PORT);
});
