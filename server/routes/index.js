// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const ShelterController = require("../controllers/shelter");
const AnimalController = require("../controllers/animal");
const UserController = require("../controllers/user");

module.exports = (app) => {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-token");
    next();
  });

  app.post('/users', UserController.register);
  app.post('/login', UserController.login);

  // No auth today.
  app.get('/shelters', ShelterController.listShelters);
  app.post('/shelters', middleware.authenticate, ShelterController.create);
  app.get('/shelters/:id', ShelterController.listAnimals);

  app.post('/shelters/:shelterId/animals', middleware.authenticate, AnimalController.create);
  app.put('/shelters/:shelterId/animals/:id', middleware.authenticate, AnimalController.update);
};
