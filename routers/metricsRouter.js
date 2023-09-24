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
const { authorize } = require("../middleware/authorization");

router.get("/", getMetrics);
router.post("/", authorize, createMetric);
router.put("/:name", authorize, updateMetric);
router.delete("/:name", authorize, deleteMetric);

module.exports = router;
