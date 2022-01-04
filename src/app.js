// ************ Require's ************
const express = require("express");
const session = require("express-session");
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE
const port = process.env.PORT || 3000;

// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(
  session({
    secret: "it's a secret",
    resave: false,
    saveUninitialized: false,
  })
);
//Configuración para la carpeta public
app.use(express.static(path.resolve(__dirname, "../public")));
//Captura la informacion que viene del formulario via post
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

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
