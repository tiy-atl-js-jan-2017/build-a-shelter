const Shelter = require("../models").Shelter;
const Animal = require("../models").Animal;

module.exports = {
  listShelters (req, res) {
    Shelter.findAll()
      .then(shelters => res.status(200).send(shelters))
      .catch(error => res.status(500).send(error));
  },

  create (req, res) {
    console.log("The current user is ", req.user);

    Shelter.create({
      name: req.body.name,
      location: req.body.location
    })
      .then(shelter => res.status(201).send(shelter))
      .catch(error => res.status(400).send(error));
  },

  show (req, res) {
    Shelter.findById(req.params.id, {
      attributes: ['id', 'name', 'location'],
      include: {
        model: Animal,
        attributes: ['id', 'name', 'breed', 'adopted', 'vaccinated', 'photoUrl'],
        where: {
          adopted: true
        }
      }
    })
      .then(animals => res.status(200).send(animals))
      .catch(error => res.status(400).send(error));
  }
};
