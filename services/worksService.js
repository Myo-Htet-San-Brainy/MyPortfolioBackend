//packages

//imports
const Work = require("../models/worksModel");
const customError = require("../errors");

async function getWorks() {
  const works = await Work.find({});
  return works;
}

async function createWork(data) {
  const work = await Work.create(data);
  return work;
}

async function updateWork(workId, data) {
  const work = await Work.findOneAndUpdate(
    {
      _id: workId,
    },
    data,
    {
      runValidators: true,
      new: true,
    }
  );
  if (!work) {
    throw new customError.NotFound(`No work found with id: ${workId}`);
  }
  return work;
}

async function deleteWork(workId) {
  const work = await Work.findOneAndDelete({
    _id: workId,
  });
  if (!work) {
    throw new customError.NotFound(`No work found with id: ${workId}`);
  }
  return work;
}

module.exports = {
  getWorks,
  createWork,
  updateWork,
  deleteWork,
};
