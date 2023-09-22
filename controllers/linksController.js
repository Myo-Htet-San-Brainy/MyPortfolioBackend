//packages
const { StatusCodes } = require("http-status-codes");

//imports
const { createLinksService } = require("../services/linksService");
const linkService = createLinksService();

const getSocialLinks = async (req, res) => {
  const formattedLinks = await linkService.getSocialLinks();
  res.status(StatusCodes.OK).json({ success: true, data: formattedLinks });
};

const getLink = async (req, res) => {
  const { name: linkName } = req.params;
  const link = await linkService.getLink(linkName);
  res.status(StatusCodes.OK).json({
    success: true,
    data: link,
  });
};

const updateLink = async (req, res) => {
  const { name: linkName } = req.params;
  const link = await linkService.updateLink(linkName, req.body);
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

const createLink = async (req, res) => {
  const link = await linkService.createLink(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

module.exports = {
  getSocialLinks,
  getLink,
  updateLink,
  createLink,
};
