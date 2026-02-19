const db = require("../database/models");
const User = db.User;

async function userLoggedMiddleware(req, res, next) {
  try {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    if (emailInCookie && !req.session.userLogged) {
      let userFromCookie = await User.findOne({
        where: { email: emailInCookie },
      });

      if (userFromCookie) {
        req.session.userLogged = userFromCookie;
      }
    }

    if (req.session.userLogged) {
      res.locals.isLogged = true;
      res.locals.userLogged = req.session.userLogged;
    }

    next();
  } catch (error) {
    console.log(error);
    next();
  }
}

module.exports = userLoggedMiddleware;
