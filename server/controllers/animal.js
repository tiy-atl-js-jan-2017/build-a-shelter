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
  },

  update (req, res) {
    Animal.findById(req.params.id)
      .then(animal => {
        animal.update(req.body, {
          fields: ['name', 'adopted', 'vaccinated', 'shelterId'],
          where: {
            id: req.params.id
          }
        })
          .then(rowsChanged => res.status(202).send(animal))
          .catch(error => res.status(400).send(error));
      });
  }

  // update (req, res) {
  //   Animal.update(req.body, {
  //     fields: ['name', 'adopted', 'vaccinated', 'shelterId'],
  //     where: {
  //       id: req.params.id,
  //       shelterId: req.params.shelterId
  //     }
  //   })
  //     .then(rowsChanged => res.status(202).send(rowsChanged))
  //     .catch(error => res.status(400).send(error));
  // }
};
