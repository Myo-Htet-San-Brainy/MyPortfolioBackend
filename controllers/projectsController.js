//packages
const { StatusCodes } = require("http-status-codes");

//imports
const projectsService = require("../services/projectsService");

const getProjects = async (req, res) => {
  const projects = await projectsService.getProjects();
  res.status(StatusCodes.OK).json({ success: true, data: projects });
};

const createProject = async (req, res) => {
  const project = await projectsService.createProject(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: project });
};

const updateProject = async (req, res) => {
  const { id: projectId } = req.params;
  const project = await projectsService.updateProject(projectId, req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    data: project,
  });
};

const deleteProject = async (req, res) => {
  const { id: projectId } = req.params;
  const project = await projectsService.deleteProject(projectId);
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
