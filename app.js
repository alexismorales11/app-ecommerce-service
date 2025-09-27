const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const corsMiddleware = require("./middleware/cors");
const errorHandler = require("./middleware/errorHandler");
const globalRouter = require("./routes/global");

const app = express();

app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(corsMiddleware);

// Rutas
globalRouter(app);

// Manejo de errores 404
app.use((req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  next(error);
});

// Middleware de errores
app.use(errorHandler);


module.exports = app;