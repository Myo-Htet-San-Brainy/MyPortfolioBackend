//packages

//imports
const Project = require("../models/projectsModel");

const getProjects = async (req, res) => {
  res.send("works");
};

const createProject = async (req, res) => {
  res.send("created a work");
};

const updateProject = async (req, res) => {
  res.send("updated a work");
};

const deleteProject = async (req, res) => {
  res.send("deleted a work");
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
