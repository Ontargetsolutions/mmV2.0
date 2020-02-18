const express = require("express");
var path = require("path");

// const db =require('./models');

// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.static(path.join(__dirname + "./client/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/HBdata"
// );

// Setup app listener and database connection
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
  // db.sequelize
  //   .sync()
  //   .then(() => {
  //     db.sequelize
  //       .authenticate()
  //       .then(() => {
  //         console.log('Connection to database has been established successfully.');
  //       })
  //       .catch(err => {
  //         console.error('Unable to connect to the database:', err);
  //       });
  //   })
  //   .catch(err => {
  //     console.error('Unable to connect to the database:', err);
  //   });
});


