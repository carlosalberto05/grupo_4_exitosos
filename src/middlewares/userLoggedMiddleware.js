const User = require("../models/User");

// const db = require("../database/models");
// const User = db.User;

function userLoggedMiddleware(req, res, next) {
  try {
    res.locals.isLogged = false;

    //Tenemos a alguien en una cookie y lo pudimos encontrar en la base de datos?
    let emailInCookie = req.cookies.userEmail;
    // console.log("este es emailInCookie");
    // console.log(emailInCookie);
    let userFromCookie = User.findByField("email", emailInCookie);
    // let userFromCookie = await User.findOne({
    //   where: {
    //     email: emailInCookie,
    //   },
    // });
    //Este es userFromCookie
    // console.log(userFromCookie);

    //El usuario quizo recordar su sesión = si si, le pasamos ese usuario a sesión
    if (userFromCookie) {
      req.session.userLogged = userFromCookie;
    }

    //Si tengo a alguien en sesión la variable isLogged pasa a true y pasamos sus datos a locals
    if (req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }

    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = userLoggedMiddleware;
