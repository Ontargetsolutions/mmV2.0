const router = require("express").Router();
const Quote = require("../../controllers/Quote");

// Matches with "/api/quote"
router.route("/")
   .post(Quote.saveQuote)
   .get(Quote.getAllQuotes);

// Matches with "/api/quote/:id"
router
  .route("/:id")
  .get(Quote.getOrdersById)
  .put(Quote.update);

router.route("/client/:clientId").get(Quote.getMyOrders);

router.route("/invoiceNumber").post(Quote.getQuotesByDate);

module.exports = router;
