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
const { authorize } = require("../middleware/authorization");

router.get("/", getWorks);
router.post("/", authorize, createWork);
router.put("/:id", authorize, updateWork);
router.delete("/:id", authorize, deleteWork);

module.exports = router;
