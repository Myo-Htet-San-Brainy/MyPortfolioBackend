//packages
const express = require("express");
const router = express.Router();

//imports
const {
  adminLogin,
  createAdmin,
  changePassword,
} = require("../controllers/adminController");

router.post("/", createAdmin);
router.post("/adminLogin", adminLogin);
router.put("/changePassword", changePassword);
module.exports = router;
