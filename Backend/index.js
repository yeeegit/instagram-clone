const express = require('express')
const syncDbConnection = require('./config/syncDbConnection')
const app = express()
require('dotenv').config()

//Synchronizing Sequelize Postgresql database models
syncDbConnection()

//App port 
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send("test")
})

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`)
})