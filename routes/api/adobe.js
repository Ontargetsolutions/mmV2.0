const router = require("express").Router();
const Adobe = require("../../controllers/Adobe");



// Matches with "/api/adobe/:id"
router
  .route("/:word")
  .get(Adobe.getImages);
  
module.exports = router;