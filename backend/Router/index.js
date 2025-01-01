const express = require("express");
const router = express.Router();
const auth = require("./Auth");
const book = require("./Book");

router.use(auth, book);

module.exports = router;
