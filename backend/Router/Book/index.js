const express = require("express");
const { route } = require("../Auth");
const { getBook } = require("../../Controllers/BookController");
const router = express.Router();

router.get("/api/book" , getBook)

module.exports = router;
