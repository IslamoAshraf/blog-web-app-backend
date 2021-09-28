const express = require("express");
const connection = require("./configuration/configDB");
const { userRouter } = require("./router/app.router");

require("dotenv").config();
const app = express();
const port = process.env.DB_PORT;

connection();

app.use(express.json());
app.use(userRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
