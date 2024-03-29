//packages
const { StatusCodes } = require("http-status-codes");

//imports
const { createLinksService } = require("../services/linksService");
const linkService = createLinksService();

const getSocialLinks = async (req, res) => {
  const formattedLinks = await linkService.getSocialLinks();
  res.status(StatusCodes.OK).json({ success: true, data: formattedLinks });
};

const getAllLinks = async (req, res) => {
  const links = await linkService.getAllLinks();
  res.status(StatusCodes.OK).json({ success: true, data: links });
};

const getLink = async (req, res) => {
  const { id: linkId } = req.params;
  const link = await linkService.getLink(linkId);
  res.status(StatusCodes.OK).json({
    success: true,
    data: link,
  });
};

const updateLink = async (req, res) => {
  const { id: linkId } = req.params;
  const link = await linkService.updateLink(linkId, req.body);
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

const createLink = async (req, res) => {
  const link = await linkService.createLink(req.body);
  res.status(StatusCodes.OK).json({ success: true, data: link });
};

const deleteLink = async (req, res) => {
  const { id: linkId } = req.params;
  await linkService.deleteLink(linkId);
  res.status(StatusCodes.OK).json({ success: true });
};

module.exports = {
  getSocialLinks,
  getAllLinks,
  getLink,
  updateLink,
  createLink,
  deleteLink,
};
