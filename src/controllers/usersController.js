const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../database/usersDataBase.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
  register: (req, res) => {
    return res.render("users/register");
  },
  processRegister: (req, res) => {
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
      avatar: req.body.filename,
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));

    return res.redirect("users/login");
  },
  login: (req, res) => {
    return res.render("users/login");
  },
  profile: (req, res) => {
    return res.render("users/userProfile");
  },
};

module.exports = usersController;
