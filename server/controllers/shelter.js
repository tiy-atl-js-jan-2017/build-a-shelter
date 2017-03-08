const Shelter = require("../models").Shelter;

module.exports = {
  create (req, res) {
    Shelter.create({
      name: req.body.name,
      location: req.body.location
    })
      .then(shelter => res.status(201).send(shelter))
      .catch(error => res.status(400).send(error));
  }
};
