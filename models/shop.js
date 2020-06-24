"use strict";
module.exports = (sequelize, DataTypes) => {
  var Store = sequelize.define("Store", {
    ItemName: {
      type: DataTypes.STRING
    },
    ItemId: {
      type: DataTypes.STRING
    },
    DeliveryFee: {
        type: DataTypes.STRING
    },
    Taxes: {
        type: DataTypes.STRING
    },
    DeliveryAddress: {
        type: DataTypes.STRING
    },
    Count: {
        type: DataTypes.INTEGER
    },
    Payed: {
      type: DataTypes.BOOLEAN
    }
  });
  Store.associate = function(models) {
    // associations can be defined here
    Store.belongsTo(models.User, { onDelete: "SET NULL" });
  };
  return Store;
};
