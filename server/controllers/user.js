const User = require("../models").User;
const bcrypt = require("bcryptjs");

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
  }
};
