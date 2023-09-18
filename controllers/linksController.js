//packages
const { StatusCodes } = require("http-status-codes");

//imports
const Link = require("../models/linksModel");
const customError = require("../errors");

const getSocialLinks = async (req, res) => {
  const links = await Link.find({
    name: {
      $ne: "resume",
    },
  });
  const formattedLinks = links.reduce((acc, link) => {
    acc[link.name] = link.link;
    return acc;
  }, {});
  res.status(StatusCodes.OK).json({ success: true, data: formattedLinks });
};

const getLink = async (req, res) => {
  const { name: linkName } = req.params;
  const link = await Link.findOne({
    name: linkName,
  });
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  res.status(StatusCodes.OK).json({
    success: true,
    data: link,
  });
};

const updateLink = async (req, res) => {
  const { name: linkName } = req.params;
  const link = await Link.findOneAndUpdate(
    {
      name: linkName,
    },
    req.body,
    {
      runValidators: true,
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

const createLink = async (req, res) => {
  const link = await Link.create(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

module.exports = {
  getSocialLinks,
  getLink,
  updateLink,
  createLink,
};
