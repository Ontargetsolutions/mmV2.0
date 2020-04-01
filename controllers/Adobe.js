const db = require("../models");
const request = require("request-promise");

// Defining methods for User Controllers
module.exports = {
  getImages: (req, res) => {

    const param = req.params.word;
    // const offset = req.params.offset;
    const header = {
      "x-api-key": process.env.API_KEY_ADOBE_STOCK,
      "x-product": "MMQuotes/1.0.0"
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
