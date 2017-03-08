// Require your controllers here
const ShelterController = require("../controllers/shelter");
const AnimalController = require("../controllers/animal");

module.exports = (app) => {
  // Add your routes here
  app.post('/shelters', ShelterController.create);

  app.post('/shelters/:shelterId/animals', AnimalController.create);
};
