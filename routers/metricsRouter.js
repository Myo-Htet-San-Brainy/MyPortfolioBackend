//packages
const express = require("express");
const router = express.Router();

//imports
const {
  getMetrics,
  getNonFormattedMetrics,
  updateMetric,
  deleteMetric,
  createMetric,
} = require("../controllers/metricsController");
const { authorize } = require("../middleware/authorization");

router.get("/", getMetrics);
router.get("/nonFormattedMetrics", getNonFormattedMetrics);
router.post("/", authorize, createMetric);
router.put("/:id", authorize, updateMetric);
router.delete("/:id", authorize, deleteMetric);

module.exports = router;
