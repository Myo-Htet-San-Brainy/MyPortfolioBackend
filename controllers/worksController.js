//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Work = require("../models/worksModel");
const customError = require("../errors");

const getWorks = async (req, res) => {
  const works = await Work.find({});
  if (!works) {
    throw new Error();
  }
  res.status(StatusCodes.OK).json({ success: true, data: works });
};

const createWork = async (req, res) => {
  const work = await Work.create(req.body);
  if (!work) {
    throw new Error();
  }
  res.status(StatusCodes.OK).json({ success: true, data: work });
};

const updateWork = async (req, res) => {
  const { id: workId } = req.params;
  const work = await Work.findOneAndUpdate(
    {
      _id: workId,
    },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!work) {
    throw new customError.NotFound(`No work found with id: ${workId}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: work,
  });
};

const deleteWork = async (req, res) => {
  const { id: workId } = req.params;
  const work = await Work.findOneAndDelete({
    _id: workId,
  });
  if (!work) {
    throw new customError.NotFound(`No work found with id: ${workId}`);
  }
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
