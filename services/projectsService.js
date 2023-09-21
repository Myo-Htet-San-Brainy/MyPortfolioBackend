//packages

//imports
const Project = require("../models/projectsModel");
const customError = require("../errors");

async function getProjects() {
  const projects = await Project.find({});
  return projects;
}

async function createProject(data) {
  const project = await Project.create(data);
  return project;
}

async function updateProject(projectId, data) {
  const project = await Project.findOneAndUpdate(
    {
      _id: projectId,
    },
    data,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!project) {
    throw new customError.NotFound(`No project found with id: ${projectId}`);
  }
  return project;
}

async function deleteProject(projectId) {
  const project = await Project.findOneAndDelete({
    _id: projectId,
  });
  if (!project) {
    throw new customError.NotFound(`No project found with id: ${projectId}`);
  }
  return project;
}

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
