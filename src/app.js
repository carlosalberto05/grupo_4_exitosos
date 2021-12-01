const express = require("express");
const path = require("path");
const app = express();


/* Template Engine*/
app.set('view engine', 'ejs');

/*Módulo de rutas*/
const mainRouter = require('./routes/main');

app.use(express.static(path.resolve(__dirname, "../public")));


app.use("/", mainRouter);
app.use('/login', mainRouter.login);
app.use('/register', mainRouter.register);
app.use('/cart', mainRouter.cart);
app.use('/productDetail', mainRouter.productDetail);


app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
