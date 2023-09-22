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

const makeGetLink = (Link, customError) => async (linkName) => {
  const link = await Link.findOne({
    name: linkName,
  });
  if (!link) {
    throw new customError.NotFound(`No link found with name: ${linkName}`);
  }
  return link;
};

const makeUpdateLink = (Link) => async (linkName, data) => {
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
};

const makeCreateLink = (Link) => async (data) => {
  const link = await Link.create(data);
  return link;
};

function createLinksService() {
  //imports
  const Link = require("../models/linksModel");
  const customError = require("../errors");
  //
  const getSocialLinks = makeGetSocialLinks(Link);
  const getLink = makeGetLink(Link, customError);
  const updateLink = makeUpdateLink(Link);
  const createLink = makeCreateLink(Link);

  return {
    getSocialLinks,
    getLink,
    updateLink,
    createLink,
  };
}

module.exports = {
  createLinksService,
};
