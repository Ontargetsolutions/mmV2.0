"use strict";
module.exports = (sequelize, DataTypes) => {
  var Notification = sequelize.define("Notification", {
    Header: {
      type: DataTypes.STRING
    },
    Text: {
      type: DataTypes.STRING
    },
    Read: {
      type: DataTypes.BOOLEAN
    }
  });
  Notification.associate = function(models) {
    // associations can be defined here
    Notification.belongsTo(models.User, { onDelete: "SET NULL" });
  };
  return Notification;
};
