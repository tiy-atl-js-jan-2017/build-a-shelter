const User = require("../models").User;

module.exports = {
  register (req, res) {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      shelterId: req.body.shelterId
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }
};
