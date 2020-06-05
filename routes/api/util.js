const router = require("express").Router();
const Util = require("../../controllers/Util");
const Payment = require("../../controllers/Payment");

// Matches with "/api/utils"
router
  .route("/ups")
  .post(Util.upsDeliveryFee);

  router
  .route("/alertEmail")
  .post(Util.alertEmails);

  router
  .route("/payment")
  .post(Payment.chargeCreditCard);

  
// router
//   .route("/states/:country")
//   .get(User.getStateFromAPI);

module.exports = router;
