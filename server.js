require("dotenv").config();
const app = require("./app");
const port = process.env.PORT || 3000;

(async () => {
  try {
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error al iniciar la aplicación:", err);
  }
})();