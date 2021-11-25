const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/partials/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/users/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/users/register.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/products/productCart.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/products/productDetail.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
