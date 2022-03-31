require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => res.status(200).send("Server Connnected"));


app.listen(PORT, () => console.log(`listening to http://localhost:${5000}`));