const user = require("./User");
const image = require("./Image");
const adobe = require("./Adobe");
const quote = require("./Quote");
const notification = require("./Notification");
const util = require('./Util');
const payment = require('./Payment')

module.exports = {
  user: user,
  image: image,
  adobe: adobe,
  quote: quote,
  notification: notification,
  util: util,
  payment: payment
};
