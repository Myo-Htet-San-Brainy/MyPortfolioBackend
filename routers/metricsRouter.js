//packages
const express = require("express");
const router = express.Router();

//imports
const {
  getMetrics,
  updateMetric,
  deleteMetric,
  createMetric,
} = require("../controllers/metricsController");

router.get("/", getMetrics);
router.post("/", createMetric);
router.put("/:id", updateMetric);
router.delete("/:id", deleteMetric);

module.exports = router;
