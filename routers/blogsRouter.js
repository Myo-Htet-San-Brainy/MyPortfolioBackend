//packages
const express = require("express");
const router = express.Router();

//imports
const { getBlogs, createBlog } = require("../controllers/blogsController");
const { authorize } = require("../middleware/authorization");

router.get("/", getBlogs);
router.post("/", authorize, createBlog);

module.exports = router;
