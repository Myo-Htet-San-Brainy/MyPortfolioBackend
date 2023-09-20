//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Metric = require("../models/metricsModel");
const customError = require("../errors");

const getMetrics = async (req, res) => {
  const metrics = await Metric.find({});
  const formattedMetrics = metrics.reduce((acc, metric) => {
    acc[metric.name] = metric.number;
    return acc;
  }, {});
  res.status(StatusCodes.OK).json({ success: true, data: formattedMetrics });
};

const createMetric = async (req, res) => {
  const metric = await Metric.create(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

const updateMetric = async (req, res) => {
  const { name: metricName } = req.params;
  const metric = await Metric.findOneAndUpdate(
    {
      name: metricName,
    },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

const deleteMetric = async (req, res) => {
  const { name: metricName } = req.params;
  const metric = await Metric.findOneAndDelete({
    name: metricName,
  });
  if (!metric) {
    throw new customError.NotFound(`No metric found with name: ${metricName}`);
  }
  res.status(StatusCodes.OK).json({ success: true, data: metric });
};

module.exports = {
  getMetrics,
  createMetric,
  deleteMetric,
  updateMetric,
};
