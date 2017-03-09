const User = require("../models").User;
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");

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

        console.log(user.salt);
        var input = bcrypt.hashSync(req.body.password, user.salt);
        console.log(`hashed input: ${input}, stored password: ${user.password}`);
        if (input === user.password) {
          var token = jwt.encode({ id: user.id, name: user.name }, appSecrets.jwtSecret);
          return res.status(200).send(token);
        } else {
          return res.status(401).send({ message: "No such email or wrong password." });
        }
      })
      .catch(error => res.status(400).send(error));
  }
};
