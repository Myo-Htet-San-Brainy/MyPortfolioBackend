//packages

//imports
const Link = require("../models/linksModel");
const customError = require("../errors");

async function getSocialLinks() {
  const links = await Link.find();
  const formattedLinks = links.reduce((acc, link) => {
    acc[link.name] = link.link;
    return acc;
  }, {});
  return formattedLinks;
}

async function getLink(linkName) {
  const link = await Link.findOne({
    name: linkName,
  });
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  return link;
}

async function updateLink(linkName, data) {
  const link = await Link.findOneAndUpdate(
    {
      name: linkName,
    },
    data,
    {
      runValidators: true,
      new: true,
    }
  );
  return link;
}

async function createLink(data) {
  const link = await Link.create(data);
  return link;
}

module.exports = {
  getSocialLinks,
  getLink,
  updateLink,
  createLink,
};
