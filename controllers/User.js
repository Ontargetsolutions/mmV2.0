const db = require("../models");
const request = require("request-promise");

 

// Defining methods for User Controllers
module.exports = {
  getAllUsers: (req, res) => {
    db.User.findAll({ where: { Rol: "Client", Active: true } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  getAllWorkers: (req, res) => {
    db.User.findAll({
      where: { Rol: { [Sequelize.Op.or]: ["Admin", "Seller"] }, Active: true }
    })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  getUserByEmail: (req, res) => {
    db.User.findOne({ where: { Email: req.params.email } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  getPersonById: (req, res) => {
    db.User.findOne({ where: { id: req.params.id } })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },

  register: (req, res) => {
    console.log(
      `en la controladora para ver el body ${JSON.stringify(req.body)}`
    );
    db.User.create({
      Name: req.body.Name,
      Phone: req.body.Phone,
      AccountType: req.body.AccountType,
      Company: req.body.Company,
      Email: req.body.Email,
      Address1: req.body.Address1,
      Address2: req.body.Address2,
      City: req.body.City,
      Country: req.body.Country,
      State: req.body.State,
      Zip: req.body.Zip,
      Active: req.body.Active,
      Rol: req.body.Rol
    })
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    db.User.findOne({ id: req.params.id })
      .then(data => {
        data
          .update({
            Name: req.body.name,
            Email: req.body.email,
            Phone: req.body.phone,
            Address1: req.body.address1,
            Address2: req.body.address2,
            City: req.body.city,
            Country: req.body.country,
            State: req.body.stateC,
            Zip: req.body.zipcode
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
