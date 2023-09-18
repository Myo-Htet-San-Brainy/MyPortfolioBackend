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
router.put("/:name", updateMetric);
router.delete("/:name", deleteMetric);

module.exports = router;
