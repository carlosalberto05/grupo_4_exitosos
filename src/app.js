// ************ Require's ************
const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
//Configuración para la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));
app.use(express.json());

// ************ Template Engine - (don't touch) ************
//Configuración para moto eje y la carpeta view
app.set("view engine", "ejs");
//Configuración para las vistas que estan dentro de subcarpetas en view
app.set("views", path.join(__dirname, "views"));

// ************ Route System require and use() ************
//Rutas (notese que solo lleva la ruta principal "No subrutas")
const mainRoutes = require("./routes/mainRoutes");
const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");

app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/products", productsRoutes);

//Al final levantamos el servidor
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
