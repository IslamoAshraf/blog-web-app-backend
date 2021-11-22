const express = require("express");
const connection = require("./configuration/configDB");
const { userRouter, postRouter } = require("./router/app.router");
const seed = require("./shared/seed");

require("dotenv").config();
const app = express();
const port = process.env.DB_PORT;
//seed
// seed()
connection();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
