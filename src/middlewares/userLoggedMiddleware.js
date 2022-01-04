function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  //Sin tengo sesion y
  //Si tengo a alguien en sesión la variable isLogged pasa a true
  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
  }
  next();
}

module.exports = userLoggedMiddleware;
