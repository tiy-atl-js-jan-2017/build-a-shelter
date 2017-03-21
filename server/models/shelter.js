'use strict';

module.exports = function(sequelize, DataTypes) {
  var Shelter = sequelize.define('Shelter', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Shelter.hasMany(models.Animal, {
          foreignKey: 'shelterId'
        });

        Shelter.addScope('animals', {
          attributes: ['id', 'name', 'location'],
          include: {
            model: models.Animal,
            where: { adopted: false }
          }
        });
      }
    }
  });

  return Shelter;
};
