const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", mainRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
