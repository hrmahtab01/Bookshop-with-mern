const express = require("express");
const router = express.Router();


router.get("/api/user", (req , res)=>{
    res.status(200).json({message:"the user router is get successfully"})
})

module.exports = router