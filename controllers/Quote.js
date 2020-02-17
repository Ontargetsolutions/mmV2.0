const db = require("../models");


// Defining methods for User Controllers
module.exports = {
  saveQuote: (req, res) => {
    console.log(`en el backend pa salvar quote ${JSON.stringify(req.body)}`);
    db.Order.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getMyOrders: (req, res) => {
    db.Order.findAll({where: {UserId: req.params.clientId}})
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },

  getOrdersById: (req, res) => {
    db.Order.findOne({ where: { id: req.params.id } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.Order.findOne({where: {id: req.params.d}})
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getAllQuotes: (req, res )=>{
    db.Order.findAll()
    .then(data => res.json(data))
    .catch(err => res.status(422).json(err));
  }
 
};


