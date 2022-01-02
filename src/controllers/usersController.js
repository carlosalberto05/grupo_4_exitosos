const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

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

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    };

    User.create(userToCreate);

    return res.redirect("login");
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  profile: (req, res) => {
    return res.render("users/userProfile");
  },
};

module.exports = usersController;
