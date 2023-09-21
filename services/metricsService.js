//packages

//imports
const Metric = require("../models/metricsModel");
const customError = require("../errors");

async function getMetrics() {
  const metrics = await Metric.find({});
  const formattedMetrics = metrics.reduce((acc, metric) => {
    acc[metric.name] = metric.number;
    return acc;
  }, {});
  return formattedMetrics;
}

async function createMetric(data) {
  const metric = await Metric.create(data);
  return metric;
}

async function updateMetric(metricName, data) {
  const metric = await Metric.findOneAndUpdate(
    {
      name: metricName,
    },
    data,
    {
      runValidators: true,
      new: true,
    }
  );
  return metric;
}

async function deleteMetric(metricName) {
  const metric = await Metric.findOneAndDelete({
    name: metricName,
  });
  if (!metric) {
    throw new customError.NotFound(`No metric found with name: ${metricName}`);
  }
  return metric;
}

module.exports = {
  getMetrics,
  createMetric,
  updateMetric,
  deleteMetric,
};
