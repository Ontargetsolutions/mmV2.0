const db = require("../models");

// Defining methods for Notification Controllers
module.exports = {
  getAllNotificationsById: (req, res) => {
    // console.log(
    //   `en backend pa buscar todas las notificaciones ${JSON.stringify(
    //     req.params
    //   )} `
    // );
    db.Notification.findAll({ where: { UserId: req.params.id} })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },
  getNotificationNoRead: (req, res) => {
    // console.log(
    //   `en backend pa buscar las notificaciones sin leer ${JSON.stringify(
    //     req.params
    //   )} `
    // );
    db.Notification.findAll({ where: { Read: false, UserId: req.params.id } })
      .then(data => {
        // console.log(`resultado de las notificaciones ${JSON.stringify(data)} `);
        res.send(data);
      })
      .catch(err => res.status(422).json(err));
  },

  register: (req, res) => {
    db.Notification.create(req.body)
      .then(response => res.send(response))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {
    // console.log(
    //   `+++++++++++++++en backend pa update la notificacion a leida ${JSON.stringify(
    //     req.params
    //   )} `
    // );
    db.Notification.findOne({ where: { id: req.params.id } })
      .then(data => {
        data
          .update({ Read: true })
          .then(dbModel => {
            console.log(`updated ${JSON.stringify(dbModel)} `);
            res.send(dbModel);
          })
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  delete: (req, res) => {
    db.Notification.findOne({ id: req.params.id })
      .then(data => {
        data
          .delete(req.body)
          .then(dbModel => res.send(dbModel))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  }
};
