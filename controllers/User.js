const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const countryAPI = require("countrystatesjs");

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
    console.log(
      `objecto que viene de transformar el stado encocidgo`,
      stateCode
    );
    const stateCode = countryAPI.state(country, stateC);
    console.log(
      `objecto que viene de transformar el stado encocidgo`,
      stateCode
    );
    db.User.create(req.body)
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.User.findOne({ id: req.params.id })
      .then(data => {
        data
          .update(req.body)
          .then(dbModel => res.send(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
