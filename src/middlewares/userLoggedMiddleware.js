const db = require("../database/models");
const User = db.User;

async function userLoggedMiddleware(req, res, next) {
  try {
    res.locals.isLogged = false;

    //Tenemos a alguien en una cookie y lo pudimos encontrar en la base de datos?
    let emailInCookie = req.cookies.userEmail;

    console.log("Este es el userLogged de la linea 13");
    console.log(req.session.userLogged);

    if (req.session.userLogged == undefined && emailInCookie == undefined) {
      next();
    } else if (
      req.session.userLogged !== undefined &&
      emailInCookie == undefined
    ) {
      //Si tengo a alguien en sesión la variable isLogged pasa a true y pasamos sus datos a locals
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
      next();
    } else if (
      req.session.userLogged !== undefined &&
      emailInCookie !== undefined
    ) {
      let userFromCookie = await User.findOne({
        where: {
          email: emailInCookie,
        },
      });

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
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = userLoggedMiddleware;
