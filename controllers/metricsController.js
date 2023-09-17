//packages

//imports
const Metric = require("../models/metricsModel");

const getMetrics = async (req, res) => {
  res.send("works");
};

const createMetric = async (req, res) => {
  res.send("created a work");
};

const updateMetric = async (req, res) => {
  res.send("updated a work");
};

const deleteMetric = async (req, res) => {
  res.send("deleted a work");
};

module.exports = {
  getMetrics,
  createMetric,
  deleteMetric,
  updateMetric,
};
