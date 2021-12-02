const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");

//Configuración para moto eje y la carpeta view
app.set("view engine", "ejs");
//Configuración para las vistas que estan dentro de subcarpetas en view
app.set("views", path.join(__dirname, "views"));
//Configuración para la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));

//Rutas (notese que solo lleva la ruta principal "No subrutas")
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

//Al final levantamos el servidor
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
