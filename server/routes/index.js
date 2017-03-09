// Require your controllers here
const ShelterController = require("../controllers/shelter");
const AnimalController = require("../controllers/animal");
const UserController = require("../controllers/user");

module.exports = (app) => {
  app.post('/users', UserController.register);

  app.post('/shelters', ShelterController.create);
  app.get('/shelters/:id', ShelterController.listAnimals);

  app.post('/shelters/:shelterId/animals', AnimalController.create);
  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
