const express = require("express");
const connection = require("./configuration/configDB");
require("dotenv").config();
const app = express();
const port = process.env.DB_PORT;

app.use(express.json());

connection();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
