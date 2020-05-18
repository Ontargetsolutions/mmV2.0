const router = require("express").Router();
const Image = require("../../controllers/Image");
const multer = require('multer');

var storage = multer.memoryStorage()
// var upload = multer({storage: storage});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


const uploadsFile = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


// Matches with "/api/image"
router
  .route("/upload/:id")
  .post(uploadsFile.single("userImage"), Image.uploadFile);

  
// router.route("/uploadImage")
// .post(upload.single("image"), Image.create);

router.route("/getImage/:id")
.get(Image.getPictureById);

module.exports = router;
