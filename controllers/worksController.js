//packages

//imports
const Work = require("../models/worksModel");

const getWorks = async (req, res) => {
  res.send("works");
};

const createWork = async (req, res) => {
  res.send("created a work");
};

const updateWork = async (req, res) => {
  res.send("updated a work");
};

const deleteWork = async (req, res) => {
  res.send("deleted a work");
};

module.exports = {
  getWorks,
  createWork,
  updateWork,
  deleteWork,
};
