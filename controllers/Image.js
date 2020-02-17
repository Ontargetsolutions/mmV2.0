
const db = require("../models");


// Defining methods for User Controllers
module.exports = {
  create: (req, res) => {
    console.log('controladora de image create req.file '+ JSON.stringify(req.file));
    res.send(req.file);
  }
 
};


