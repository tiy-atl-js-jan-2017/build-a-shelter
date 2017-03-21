const User = require("../models").User;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");
const _ = require("lodash");

module.exports = {
  register (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      salt: salt,
      shelterId: req.body.shelterId
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  login (req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (!user) {
          return res.status(401).send({ message: "No such email or wrong password." });
        }

        var input = bcrypt.hashSync(req.body.password, user.salt);
        if (input === user.password) {
          var token = jwt.encode({ id: user.id, name: user.name }, appSecrets.jwtSecret);
          // could also say: `user: _.pick(user.get(), ['id', 'name', 'email']);`
          var json = {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
          };
          return res.status(200).send(json);
        } else {
          return res.status(401).send({ message: "No such email or wrong password." });
        }
      })
      .catch(error => res.status(400).send(error));
  }
};
