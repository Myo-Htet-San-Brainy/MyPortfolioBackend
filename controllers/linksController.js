//packages

//imports
const Link = require("../models/linksModel");

const getSocialLinks = async (req, res) => {
  res.send("social links");
};

const getLink = async (req, res) => {
  res.send("a link");
};

const updateLink = async (req, res) => {
  res.send("updated a link");
};

const createLink = async (req, res) => {
  res.send("created a link");
};

module.exports = {
  getSocialLinks,
  getLink,
  updateLink,
  createLink,
};
