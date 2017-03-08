'use strict';
module.exports = function(sequelize, DataTypes) {
  var Shelter = sequelize.define('Shelter', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Shelter;
};