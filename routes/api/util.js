const router = require("express").Router();
const Util = require("../../controllers/Util");
const Payment = require("../../controllers/Payment");

// Matches with "/api/utils"
router
  .route("/ups")
  .post(Util.upsDeliveryFee);


  router
  .route("/payment")
  .post(Payment.chargeCreditCard);


  router
  .route("/sendEmail")
  .post(Util.sendEmailWhenShopDone);

  router
  .route("/sendEmailQuote")
  .post(Util.sendEmailWhenOrderWasPlaced);

module.exports = router;
