// const bcryptjs = require("bcryptjs");
// const { validationResult, body } = require("express-validator");

// const User = require("../models/User");

// const usersController = {
//   register: (req, res) => {
//     return res.render("users/register");
//   },

//   processRegister: (req, res) => {
//     const resultValidation = validationResult(req);

//     if (resultValidation.errors.length > 0) {
//       return res.render("users/register", {
//         errors: resultValidation.mapped(),
//         oldData: req.body,
//       });
//     }

//     //Hacer la consulta para saber si el usuario que se está registrando se encuentra en la db
//     let userInDb = User.findByField("email", req.body.email);

//     if (userInDb) {
//       return res.render("users/register", {
//         errors: {
//           email: {
//             msg: "Este email ya está registrado",
//           },
//         },
//         oldData: req.body,
//       });
//     }

//     //Crear al usuario

//     let userToCreate = {
//       ...req.body,
//       password: bcryptjs.hashSync(req.body.password, 10),
//       avatar: req.file.filename,
//     };

//     let userCreated = User.create(userToCreate);

//     return res.redirect("login");
//   },

//   login: (req, res) => {
//     return res.render("users/login");
//   },

//   loginProcess: (req, res) => {
//     let userToLogin = User.findByField("email", req.body.email);

//     if (userToLogin) {
//       //Comparamos el password que escribio el ususario con el de la base de datos
//       let isOkThePassword = bcryptjs.compareSync(
//         req.body.password,
//         userToLogin.password
//       );
//       //Si es verdadero
//       if (isOkThePassword) {
//         delete userToLogin.password;
//         //Le pasamos userToLogin a la sesion, como un elemento de un objeto
//         req.session.userLogged = userToLogin;

//         //Esto es para las cookies, si esta activado la casilla le pasamos a cookie el email
//         if (req.body.remember_user) {
//           res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
//         }

//         return res.redirect("/users/profile");
//       }
//       return res.render("users/login", {
//         errors: {
//           email: {
//             msg: "Las credenciales son inválidas",
//           },
//         },
//       });
//     }

//     return res.render("users/login", {
//       errors: {
//         email: {
//           msg: "Correo no registrado",
//         },
//       },
//     });
//   },

//   profile: (req, res) => {
//     // console.log(req.cookies.userEmail);
//     return res.render("users/userProfile", {
//       user: req.session.userLogged,
//     });
//   },

//   logout: (req, res) => {
//     res.clearCookie("userEmail");
//     req.session.destroy();
//     return res.redirect("/");
//   },
// };

// module.exports = usersController;

const path = require("path");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");
const { validationResult, body } = require("express-validator");

const User = db.User;

const usersController = {
  register: (req, res) => {
    return res.render("users/register");
  },

  processRegister: async (req, res) => {
    const resultValidation = validationResult(req);

    console.log(resultValidation);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    try {
      let userInDb = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

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

      await User.create({
        full_name: req.body.full_name,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        politic: 1,
        avatar: req.file.filename,
        admin: false,
      });

      return res.redirect("login");
    } catch (error) {
      console.log(error);
    }
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: async (req, res) => {
    try {
      let userToLogin = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userToLogin) {
        //Comparamos el password
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        //Si es verdadero
        if (isOkThePassword) {
          delete userToLogin.password;
          //Le pasamos userToLogin a la sesion
          req.session.userLogged = userToLogin;

          //Esto es para las cookies,
          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
          }

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
    } catch (error) {
      console.log(error);
    }
  },

  profile: (req, res) => {
    // console.log(req.cookies.userEmail);
    return res.render("users/userProfile", {
      user: req.session.userLogged,
    });
  },

  //Editar unicamente el nombre del usuario
  editName: async (req, res) => {
    return res.render("users/user-edit-name", {
      userToEdit: req.session.userLogged,
    });
  },

  updateName: async (req, res) => {
    let { id } = req.params;

    try {
      await User.update(
        {
          full_name: req.body.full_name,
        },
        {
          where: {
            id_users: id,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  editEmail: async (req, res) => {
    return res.render("users/user-edit-email", {
      userToEdit: req.session.userLogged,
    });
  },

  updateEmail: async (req, res) => {
    let { id } = req.params;

    try {
      await User.update(
        {
          email: req.body.email,
        },
        {
          where: {
            id_users: id,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  editPassword: async (req, res) => {
    return res.render("users/user-edit-password", {
      userToEdit: req.session.userLogged,
    });
  },

  updatePassword: async (req, res) => {
    let { id } = req.params;

    try {
      await User.update(
        {
          password: bcryptjs.hashSync(req.body.password, 10),
        },
        {
          where: {
            id_users: id,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = usersController;
