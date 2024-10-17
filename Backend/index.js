const express = require('express')
const syncDbConnection = require('./config/syncDbConnection')
const app = express()
require('dotenv').config()

const authRoues = require('./src/routes/Auth/index')

//Synchronizing Sequelize Postgresql database models
syncDbConnection()

//App port 
const PORT = process.env.PORT

//Body and From parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api', authRoues)

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`)
})