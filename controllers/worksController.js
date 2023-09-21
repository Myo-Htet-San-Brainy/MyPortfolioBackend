//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Work = require("../models/worksModel");
const customError = require("../errors");
const worksService = require("../services/worksService");

const getWorks = async (req, res) => {
  const works = await worksService.getWorks();
  res.status(StatusCodes.OK).json({ success: true, data: works });
};

const createWork = async (req, res) => {
  const work = await worksService.createWork(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: work });
};

const updateWork = async (req, res) => {
  const { id: workId } = req.params;
  const work = await worksService.updateWork(workId, req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    data: work,
  });
};

const deleteWork = async (req, res) => {
  const { id: workId } = req.params;
  const work = await worksService.deleteWork(workId);
  res.status(StatusCodes.OK).json({
    success: true,
    data: work,
  });
};

module.exports = {
  getWorks,
  createWork,
  updateWork,
  deleteWork,
};
