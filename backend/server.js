require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listensing at http://localhost:${PORT}`));

connectDB();

app.get('/', (req,res) => {
    res.status(200).send(`Routes is addressing`)
})