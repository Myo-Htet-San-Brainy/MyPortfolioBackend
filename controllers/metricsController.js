//packages
const { StatusCodes } = require("http-status-codes");

//imports
const metricsService = require("../services/metricsService");

const getMetrics = async (req, res) => {
  const formattedMetrics = await metricsService.getMetrics();
  res.status(StatusCodes.OK).json({ success: true, data: formattedMetrics });
};

const getNonFormattedMetrics = async (req, res) => {
  const nonFormattedMetrics = await metricsService.getNonFormattedMetrics();
  res.status(StatusCodes.OK).json({ success: true, data: nonFormattedMetrics });
};

const createMetric = async (req, res) => {
  const metric = await metricsService.createMetric(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

const updateMetric = async (req, res) => {
  const { name: metricName } = req.params;
  const metric = await metricsService.updateMetric(metricName, req.body);
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

const deleteMetric = async (req, res) => {
  const { name: metricName } = req.params;
  const metric = await metricsService.deleteMetric(metricName);
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

module.exports = {
  getMetrics,
  getNonFormattedMetrics,
  createMetric,
  deleteMetric,
  updateMetric,
};
