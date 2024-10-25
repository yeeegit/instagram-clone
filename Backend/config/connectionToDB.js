const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.POSTGRES_DATABASE,
//   process.env.POSTGRES_USER,
//   process.env.POSTGRES_PASSWORD,
//   {
//     host: process.env.POSTGRES_HOST,
//     port: process.env.POSTGRES_PORT || 5432, // Default to 5432 if no port is provided
//     dialect: "postgres",
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true, // *mostly optional for dev environment, required to connect vercel's postgresDB
//         rejectUnauthorized: false, // optional based on your environment
//       },
//     },
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Database successfully connected");
//   })
//   .catch((error) => {
//     console.log("Database connection error:", error);
//   });

// module.exports = sequelize;

/* 
  Use the following version for local connections when environment variable names differ from vercel's.
  Ensure the variable names are identical to your configuration settings.
  
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  logging: false
});
sequelize.authenticate()
  .then(() => { console.log('Database successfully connected'); })
  .catch((error) => { console.log('Database connection error:', error); });
module.exports = sequelize;
*/



const sequelize = new Sequelize("databasename", "databaseusername:exp-postgres", "databasepassword", {//config function without .env for testModel.js model table testing.Only works without .env
  host: "localhost",
  port: 5432,//postgres port 
  dialect: 'postgres',
  logging: false
});
sequelize.authenticate()
  .then(() => { console.log('Database successfully connected'); })
  .catch((error) => { console.log('Database connection error:', error); });
module.exports = sequelize;

