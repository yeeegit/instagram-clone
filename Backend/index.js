const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const syncDbConnection = require("./config/syncDbConnection");
const setupSwagger = require("./src/swagger/swagger");
require("dotenv").config();
const helmet = require("helmet");
const allRoutes = require("./src/routes/index");

const app = express();
const PORT = process.env.PORT || 5723;

syncDbConnection(); //Synchronizing Sequelize Postgresql database models

//Body,Form, Cookie parsers and security middlewares
app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  cors({ origin: process.env.FRONTEND_URL, credentials: true }),
  cookieParser(),
  helmet(),
]);

app.use("/api", allRoutes);

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Running on port:${PORT}`);
});
