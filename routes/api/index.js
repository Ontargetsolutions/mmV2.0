const router = require("express").Router();
const usersRoutes = require("./users");
const utilRoutes = require('./util.js');
const quote = require("./quote");
const adobe = require('./adobe');
const image = require('./image');



router.use("/users", usersRoutes);
router.use('/utils', utilRoutes);
router.use("/quote", quote);
router.use('/adobe',adobe );
router.use('/image',image );


module.exports = router;
