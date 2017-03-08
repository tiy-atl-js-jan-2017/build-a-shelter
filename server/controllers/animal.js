const Animal = require("../models").Animal;

module.exports = {
  create (req, res) {
    Animal.create({
      name: req.body.name,
      adopted: req.body.adopted,
      vaccinated: req.body.vaccinated,
      age: req.body.age,
      breed: req.body.breed,
      shelterId: req.params.shelterId
    })
      .then(animal => res.status(201).send(animal))
      .catch(error => res.status(400).send(error));
  }
};
