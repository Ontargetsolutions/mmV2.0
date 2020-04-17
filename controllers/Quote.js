const db = require("../models");
var moment = require('moment');
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Defining methods for User Controllers
module.exports = {
  saveQuote: (req, res) => {
    console.log(`en el backend pa salvar quote ${JSON.stringify(req.body)}`);
    db.Order.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getMyOrders: (req, res) => {
    db.Order.findAll({ where: { UserId: req.params.clientId } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },

  getOrdersById: (req, res) => {
    db.Order.findOne({ where: { id: req.params.id } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Order.findOne({ where: { id: req.params.id } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getAllQuotes: (req, res) => {
    db.Order.findAll()
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getQuotesByDate: (req, res) => {
    console.log(`en el backend para generar invoice number ${JSON.stringify(req.body)}`);
  // const dateOrder =  moment(req.body.createdAt).format("YYYY-MM-DD");
  // console.log(dateOrder);
    // const Op = Sequelize.Op;
    // const startTime = dateOrder.setHours(0, 0, 0, 0);
    // const endTime = dateOrder.setHours(23,59,59,59);
    // var myDate = new Date(req.body.createdAt);
    var myDate =  moment(req.body.createdAt,"YYYY-MM-DD").format("YYYY-MM-DD");
    console.log(myDate);
    // console.log(startTime);
    // console.log(endTime);
    // console.log(startTime);
    // const NOW = new Date();
    db.Order.findAll({
      // where: { 
      //   where: sequelize.where(sequelize.fn('date', sequelize.col('createdAt')), '=', dateOrder)
      // }
    //   where: {"createdAt": {
    //     $lt: new Date(dateOrder),
    //     $gt: new Date(new Date(dateOrder) - 24 * 60 * 60 * 1000)
    // } }, 
    where: {
      createdAt: {
        // [Op.between]: [new Date(Date(startTime)), new Date(Date(endTime))],
        $gt: myDate,
      }
      // createdAt: {$and:[{$gte:'2020-04-01 00:00:00'},{$lt:'2020-04-01 23:59:59'}]}
  }
    })
      .then(data => res.send(data))
      // res.send('here')
      .catch(err => res.status(422).json(err));
  }
};
