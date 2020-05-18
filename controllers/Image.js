const db = require("../models");
var stream = require("stream");

// Defining methods for User Controllers
module.exports = {
  uploadFile: (req, res) => {
    // console.log(`en el backend pa guardar la pic ${JSON.stringify(req.file)}`);
    const Name =
      new Date().toISOString().replace(/:/g, "-") + req.file.originalname;
    db.Image.create({
      Name: Name,
      Data: req.file.buffer,
      UserId: req.params.id
    }).then(data => {
      res.send(data);
    });
  },

  downloadFile: (req, res) => {
    db.Image.findById(req.params.id).then(file => {
      var fileContents = Buffer.from(file.data, "base64");
      var readStream = new stream.PassThrough();
      readStream.end(fileContents);
      res.set("Content-disposition", "attachment; filename=" + file.name);
      res.set("Content-Type", file.type);

      readStream.pipe(res);
    });
  },

  getPictureById: (req, res) => {
    console.log(`en el backend pa encontrar la imagen`);
    db.Image.findOne({ where: { id: req.params.id }, raw: true })
      .then(pic => {

        res.send(pic);
      })
  }
};


