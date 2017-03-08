const Shelter = require("../models").Shelter;
const Animal = require("../models").Animal;

module.exports = {
  create (req, res) {
    Shelter.create({
      name: req.body.name,
      location: req.body.location
    })
      .then(shelter => res.status(201).send(shelter))
      .catch(error => res.status(400).send(error));
  },

  listAnimals (req, res) {
    Animal.findAll({
      where: {
        shelterId: req.params.id
      }
    })
      .then(animals => res.status(200).send(animals))
      .catch(error => res.status(400).send(error));
  }
};
