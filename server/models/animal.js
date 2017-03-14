'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    adopted: DataTypes.BOOLEAN,
    vaccinated: DataTypes.BOOLEAN,
    age: DataTypes.INTEGER,
    photoUrl: DataTypes.STRING,
    shelterId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animal;
};
