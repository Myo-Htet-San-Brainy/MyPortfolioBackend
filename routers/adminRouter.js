//packages
const express = require("express");
const router = express.Router();

//imports
const { adminLogin } = require("../controllers/adminController");

router.post("/adminLogin", adminLogin);

module.exports = router;
