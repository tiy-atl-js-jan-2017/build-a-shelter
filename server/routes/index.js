// Require your controllers here
const ShelterController = require("../controllers/shelter");

module.exports = (app) => {
  // Add your routes here
  app.post('/shelters', ShelterController.create);

};
