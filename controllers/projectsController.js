//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Project = require("../models/projectsModel");
const customError = require("../errors");

const getProjects = async (req, res) => {
  const projects = await Project.find({});
  res.status(StatusCodes.OK).json({ success: true, data: projects });
};

const createProject = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: project });
};

const updateProject = async (req, res) => {
  const { id: projectId } = req.params;
  const project = await Project.findOneAndUpdate(
    {
      _id: projectId,
    },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!project) {
    throw new customError.NotFound(`No work found with id: ${projectId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: project,
  });
};

const deleteProject = async (req, res) => {
  const { id: projectId } = req.params;
  const project = await Project.findOneAndDelete({
    _id: projectId,
  });
  if (!project) {
    throw new customError.NotFound(`No work found with id: ${projectId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: project,
  });
};

module.exports = {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
};
