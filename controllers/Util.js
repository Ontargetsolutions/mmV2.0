const db = require("../models");
const request = require("request-promise");

// Defining methods for User Controllers
module.exports = {
  upsDeliveryFee: (req, res) => {
    console.log(
      `en el backend lo que llega pa buscar delivery fee ${JSON.stringify(
        req.body
      )}`
    );
    const bodyRequest = req.body;

    const options = {
      method: "POST",
      headers: {
        AccessLicenseNumber: process.env.UPS_LICENSE_NUMBER,
        Password: process.env.UPS_PASSWORD,
        "Content-Type": "application/json",
        transld: "Tran123",
        transactionSrc: "XOLT",
        UserName: process.env.UPS_USERNAME
      },
      uri: "https://wwwcie.ups.com/ship/v1/rating/Rate",
      body: {
        some: bodyRequest
      },
      json: true // Automatically stringifies the body to JSON
    };

    request(options)
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  },

  upsRate: (req, res) => {
    console.log(`herreee`);
    // db.User.create(req.body)
    //   .then(response => res.send(response))
    //   .catch(err => res.status(422).json(err));
  }
};
