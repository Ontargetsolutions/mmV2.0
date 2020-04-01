'use strict';
module.exports = (sequelize, DataTypes) => {
    var Image = sequelize.define (
      'Image',
      {
        Name: {
          type: DataTypes.STRING
        },
        Data: {
            type: DataTypes.BLOB('long')
          }
      }
    );
    Image.associate = function (models) {
      // associations can be defined here
      Image.belongsTo (models.User, {onDelete: 'SET NULL'});
    };
    return Image;
  };