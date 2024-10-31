const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerConfig");

const setupSwagger = (app) => {
  app.use(
    "/api-docs",
    cors({ origin: process.env.SWAGGER_URL }),
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      swaggerOptions: { displayRequestDuration: true },
    })
  );
};

module.exports = setupSwagger;