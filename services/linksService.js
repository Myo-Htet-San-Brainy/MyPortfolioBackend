//packages

//imports

const makeGetSocialLinks = (Link) => async () => {
  const links = await Link.find();
  const formattedLinks = links.reduce((acc, link) => {
    acc[link.name] = link.link;
    return acc;
  }, {});
  return formattedLinks;
};

const makeGetAllLinks = (Link) => async () => {
  const links = await Link.find();
  return links;
};

const makeGetLink = (Link, customError) => async (linkName) => {
  const link = await Link.findOne({
    name: linkName,
  });
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  return link;
};

const makeUpdateLink = (Link, customError) => async (linkName, data) => {
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
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  return link;
};

const makeCreateLink = (Link) => async (data) => {
  const link = await Link.create(data);
  return link;
};

const makeDeleteLink = (Link, customError) => async (linkName) => {
  const link = await Link.findOneAndDelete({
    name: linkName,
  });
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  return link;
};

function createLinksService() {
  //imports
  const Link = require("../models/linksModel");
  const customError = require("../errors");
  //
  const getSocialLinks = makeGetSocialLinks(Link);
  const getAllLinks = makeGetAllLinks(Link);
  const getLink = makeGetLink(Link, customError);
  const updateLink = makeUpdateLink(Link, customError);
  const createLink = makeCreateLink(Link);
  const deleteLink = makeDeleteLink(Link, customError);

  return {
    getSocialLinks,
    getAllLinks,
    getLink,
    updateLink,
    createLink,
    deleteLink,
  };
}

module.exports = {
  createLinksService,
};
