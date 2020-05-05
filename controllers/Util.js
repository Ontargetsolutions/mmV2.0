const db = require("../models");
const request = require("request-promise");


// Defining methods for User Controllers
module.exports = {
  upsDeliveryFee: (req, res) =>{
    console.log(`en el backend lo que llega pa buscar delivery fee ${JSON.stringify(req.params)}`)
    const param = req.params.word;
    const header = {
      "AccessLicenseNumber": process.env.UPS_LICENSE_NUMBER,
      "Password": process.env.UPS_PASSWORD,
      "Content-Type": "application/json",
      "transld": "Tran123",
      "transactionSrc": "XOLT",
      "UserName": process.env.UPS_USERNAME
    };
    const nhtsaEndpoint = new URL(
      `https://stock.adobe.io/Rest/Media/1/Search/Files?search_parameters[words]=${param}&search_parameters[limit]=500&search_parameters[filters][orientation]=square&search_parameters[thumbnail_size]=240&search_parameters[filters][image_width]=500`
    );
    request
      .get({ url: nhtsaEndpoint, headers: header })
      .then(data => res.send(data))
      .catch(err => res.status(422).json(err));
  }
  
};