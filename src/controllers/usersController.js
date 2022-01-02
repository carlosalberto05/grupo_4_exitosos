const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const User = require("../models/User");

const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
