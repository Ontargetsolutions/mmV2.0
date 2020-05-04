const router = require("express").Router();
const User = require("../../controllers/User");

// Matches with "/api/users"
router
  .route("/")
  .get(User.getAllUsers)
  .post(User.register);

  router
  .route("/getEmployees")
  .get(User.getAllEmployees);


// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(User.getPersonById)
  .put(User.update);

// Matches with "/api/users/email/:email"
router.route("/email/:email").get(User.getUserByEmail);


module.exports = router;
