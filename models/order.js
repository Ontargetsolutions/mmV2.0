'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define (
    'Order',
    {
      Cost: {
        type: DataTypes.REAL,
      },
      DeliveryFee: {
        type: DataTypes.REAL,
      },
      ImageSource: {
        type: DataTypes.STRING,
      },
      ImagePath: {
        type: DataTypes.STRING,
      },
      FramePath: {
        type: DataTypes.STRING,
      },
      Size: {
        type: DataTypes.STRING,
      },
      Product: {
        type: DataTypes.STRING,
      },
      Service: {
        type: DataTypes.STRING,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      City: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      State: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Zip: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [5, 11],
      },
      Status: {
        type: DataTypes.STRING,
      },
      InvoiceNumber: {
        type: DataTypes.STRING,
      },
      HardwoodThickness: {
        type: DataTypes.STRING,
      },
      HardwoodWidth: {
        type: DataTypes.STRING,
      },
      HardwoodLength: {
        type: DataTypes.STRING,
      },
      HardwoodType: {
        type: DataTypes.STRING,
      },
      HardwoodStyle: {
        type: DataTypes.STRING,
      },
      HardwoodFinish: {
        type: DataTypes.STRING,
      },
      HardwoodSelected: {
        type: DataTypes.STRING,
      }
 
    }
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo (models.User, {onDelete: 'SET NULL'});
    Order.belongsTo (models.Image, {onDelete: 'SET NULL'});
    // Order.belongsTo (models.Frame, {onDelete: 'SET NULL'});
    // Order.belongsTo (models.Pattern, {onDelete: 'SET NULL'});
  };
  return Order;
};