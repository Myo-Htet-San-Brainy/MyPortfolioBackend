//packages

//imports
const Blog = require("../models/blogModel");

async function getBlogs() {
  const blogs = await Blog.find({});
  return blogs;
}

async function createBlog(data) {
  const blog = await Blog.create(data);
  return blog;
}

module.exports = {
  getBlogs,
  createBlog,
};
