const express = require("express");
const syncDbConnection = require("./config/syncDbConnection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./src/swagger/swaggerConfig");

const allRoutes = require("./src/routes/index");

//Synchronizing Sequelize Postgresql database models
syncDbConnection();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

//App port, default port 5723
const PORT = process.env.PORT || 5723;

//Body,Form and Cookie parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//All App Routes
app.use("/api", allRoutes);

//Swagger URL
app.use("/api-docs",cors({
  origin:process.env.SWAGGER_URL
}), swaggerUi.serve, swaggerUi.setup(swaggerDocument,{swaggerOptions:{displayRequestDuration:true}}));

app.listen(PORT, () => {
  console.log(`App listening on port : ${PORT}`);
});
