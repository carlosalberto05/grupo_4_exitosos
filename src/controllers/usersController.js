const bcryptjs = require("bcryptjs");
const { validationResult, body } = require("express-validator");

const User = require("../models/User");

const usersController = {
  register: (req, res) => {
    return res.render("users/register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    //Hacer la consulta para saber si el usuario que se está registrando se encuentra en la db
    let userInDb = User.findByField("email", req.body.email);

    if (userInDb) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    //Crear al usuario

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    };

    let userCreated = User.create(userToCreate);

    return res.redirect("login");
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: (req, res) => {
    let userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      //Comparamos el password que escribio el ususario con el de la base de datos
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      //Si es verdadero
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;
        return res.redirect("/users/profile");
      }
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }

    return res.render("users/login", {
      errors: {
        email: {
          msg: "Correo no registrado",
        },
      },
    });
  },

  profile: (req, res) => {
    return res.render("users/userProfile");
  },
};

module.exports = usersController;
