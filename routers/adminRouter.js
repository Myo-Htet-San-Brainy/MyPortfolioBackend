//packages
const express = require("express");
const router = express.Router();

//imports
const {
  adminLogin,
  createAdmin,
  changePassword,
} = require("../controllers/adminController");
const { authorize } = require("../middleware/authorization");

router.post("/", createAdmin);
router.post("/adminLogin", adminLogin);
router.put("/changePassword", authorize, changePassword);
module.exports = router;
