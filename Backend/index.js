const express = require("express");
const syncDbConnection = require("./config/syncDbConnection");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/swagger/swaggerConfig");

const authRoues = require("./src/routes/Auth/index");

//Synchronizing Sequelize Postgresql database models
syncDbConnection();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

//App port, default port 5723
const PORT = process.env.PORT || 5723;

//Body and From parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", authRoues);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`);
});
