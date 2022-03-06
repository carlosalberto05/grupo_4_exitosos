const paht = require("path");
const db = require("../../database/models");

const User = db.User;

const userApiController = {
  list: async (req, res) => {
    try {
      let usersInDb = await User.findAll();

      let allUsers = usersInDb.map((user) => {
        let userInfo = {};
        userInfo.id = user.id_users;
        userInfo.name = user.full_name;
        userInfo.email = user.email;
        userInfo.detail = `http://localhost:3000/api/users/${user.id_users}`;
        return userInfo;
      });

      let response = {
        meta: {
          status: 200,
          count: usersInDb.length,
          url: "api/users",
        },
        data: allUsers,
      };
      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  detail: async (req, res) => {
    try {
      let userInDb = await User.findByPk(req.params.id);

      let response;

      if (userInDb !== null) {
        let userInfo = {};
        userInfo.id = userInDb.id_users;
        userInfo.name = userInDb.full_name;
        userInfo.email = userInDb.email;

        if (userInDb.avatar.includes("http")) {
          userInfo.avatar = userInDb.avatar;
        } else {
          userInfo.avatar = `http://localhost:3000/images/avatars/${userInDb.avatar}`;
        }

        response = {
          meta: {
            status: 200,
            url: "api/users/:id",
          },
          data: userInfo,
        };
      } else {
        response = {
          meta: {
            status: 204,
            url: "api/users/:id",
          },
          data: "No hay ususarios con ese id",
        };
      }

      res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userApiController;
