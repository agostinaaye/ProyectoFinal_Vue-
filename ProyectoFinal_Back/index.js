const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./src/routes/index");
const cors = require("cors");
//Configurar Express para permitir conexión a una dirección en particular.
//Para permitir a cualquier dirección, app.use(cors())
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
