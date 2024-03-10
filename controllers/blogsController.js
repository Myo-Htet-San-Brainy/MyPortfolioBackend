//packages
const { StatusCodes } = require("http-status-codes");

//imports
const blogsService = require("../services/blogsService");

const getBlogs = async (req, res) => {
  const blogs = await blogsService.getBlogs();
  res.status(StatusCodes.OK).json(blogs);
};

const createBlog = async (req, res) => {
  const blog = await blogsService.createBlog(req.body);
  res.status(StatusCodes.CREATED).json(blog);
};

module.exports = {
  getBlogs,
  createBlog,
};
