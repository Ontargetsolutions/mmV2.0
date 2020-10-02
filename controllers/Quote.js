const db = require("../models");
var Sequelize = require("sequelize");
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
  getAllQuotesByProuct: (req, res) => {
    console.log(
      `en el backend para obtener quota por productos ${JSON.stringify(
        req.params
      )}`
    );
    db.Order.findAll({ where: { Product: req.params.product } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getNoCompletedQuotesByProuct: (req, res) => {
    console.log(
      `en el backend para obtener quota por productos ${JSON.stringify(
        req.params
      )}`
    );
    db.Order.findAll({ where: { Product: req.params.product, Status: {[Op.ne]: "Completed"} } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getCompletedQuotesByProuct: (req, res) => {
    console.log(
      `en el backend para obtener quota por productos ${JSON.stringify(
        req.params
      )}`
    );
    db.Order.findAll({ where: { Product: req.params.product, Status: {[Op.eq]: "Completed"} } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  getQuotesByDate: (req, res) => {getNoCompletedQuotesByProuct
    const newstr = req.body.InvoiceNumber.replace(/-|:|\.|\s/g,"");
    db.Order.findOne({ where: { id: req.params.id } })
      .then(data => {
        data
          .update({InvoiceNumber: newstr} )
          .then(dbModel => res.send(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
