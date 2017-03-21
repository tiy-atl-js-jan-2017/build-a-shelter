const Shelter = require("../models").Shelter;

module.exports = {
  listShelters (req, res) {
    Shelter.scope('animals').findAll()
      .then(shelters => res.status(200).send(shelters))
      .catch(error => res.status(500).send(error));
  },

  create (req, res) {
    Shelter.create({
      name: req.body.name,
      location: req.body.location
    })
      .then(shelter => res.status(201).send(shelter))
      .catch(error => res.status(400).send(error));
  },

  show (req, res) {
    // Shelter.findOne({ where: , include: })
    // Shelter.findAll({ where: , include: , order: })
    Shelter.scope('animals').findById(req.params.id)
      .then(shelter => res.status(200).send(shelter))
      .catch(error => res.status(400).send(error));
  }
};
