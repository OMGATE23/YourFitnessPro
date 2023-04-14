const express = require('express')
const app = express()
require('dotenv').config()
const connectToDB = require('./config/db')

connectToDB()
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("Server is running on port" , process.env.PORT);
  });
