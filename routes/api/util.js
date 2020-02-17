const router = require("express").Router();
const User = require("../../controllers/User");

// Matches with "/api/utils"
router
  .route("/country")
  .get(User.getCountryFromAPI);

router
  .route("/states/:country")
  .get(User.getStateFromAPI);

module.exports = router;
