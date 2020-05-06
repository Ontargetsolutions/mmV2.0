const router = require("express").Router();
const Util = require("../../controllers/Util");

// Matches with "/api/utils"
router
  .route("/ups")
  .post(Util.upsDeliveryFee);

// router
//   .route("/states/:country")
//   .get(User.getStateFromAPI);

module.exports = router;
