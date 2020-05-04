const router = require("express").Router();
const Notification = require("../../controllers/Notification.js");

// Matches with "/api/notification"
router
  .route("/")
  .post(Notification.register);

// Matches with "/api/notification/:id"
router
  .route("/:id")
  .get(Notification.getAllNotificationsById)
  .put(Notification.update)
  .delete(Notification.delete);

  // Matches with "/api/notification/noread/:id"
router.route("/noread/:id").get(Notification.getNotificationNoRead);

module.exports = router;
