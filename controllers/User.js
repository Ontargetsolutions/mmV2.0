const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;


// Defining methods for User Controllers
module.exports = {
  getAllUsers: (req, res) => {
    db.User.findAll({ where: { Rol: "Client", Active: true } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  getAllEmployees: (req, res) => {
    db.User.findAll({
      where: { Rol: { [Sequelize.Op.or]: ["Admin", "Seller"] }, Active: true }
    })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  getAllEmployeesById: (req, res) => {
    console.log(`lo que llega al backend`,  JSON.stringify(req.param) )
    db.User.findOne({
      where: { Rol: { [Sequelize.Op.or]: ["Admin", "Seller"] }, Active: true, id: req.params.id  }
    })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  getUserByEmail: (req, res) => {
    db.User.findOne({ where: { Email: req.params.email } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  getPersonById: (req, res) => {
    db.User.findOne({ where: { id: req.params.id } })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  register: (req, res) => {
    db.User.create(req.body)
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.User.findOne({where: { id: req.params.id }})
      .then(data => {
        data
          .update(req.body)
          .then(dbModel => res.send(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
