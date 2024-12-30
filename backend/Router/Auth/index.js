const express = require("express");
const { registerController, Logincontroller } = require("../../Controllers/Authcontroller");
const router = express.Router();


router.post("/api/user/register", registerController)
router.post("/api/user/login", Logincontroller)


module.exports = router