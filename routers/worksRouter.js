//packages
const express = require("express");
const router = express.Router();

//imports
const {
  getWorks,
  updateWork,
  deleteWork,
  createWork,
} = require("../controllers/worksController");

router.get("/", getWorks);
router.post("/", createWork);
router.put("/:id", updateWork);
router.delete("/:id", deleteWork);

module.exports = router;
