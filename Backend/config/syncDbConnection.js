const sequelize = require('./connectionToDB')

const syncDbConnection = () => {
  sequelize.sync({ force: false, logging: false })
    .then(() => { console.log('Database succesfully synchronized') })
    .catch((error) => { console.log('Database synchronization error : ', error) })
}
module.exports = syncDbConnection