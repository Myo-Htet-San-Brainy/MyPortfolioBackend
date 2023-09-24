//packages
const express = require("express");
const router = express.Router();

//imports
const {
  getSocialLinks,
  getLink,
  updateLink,
  createLink,
  deleteLink,
} = require("../controllers/linksController");

router.get("/getSocialLinks", getSocialLinks);
router.post("/", createLink);
router.get("/:name", getLink);
router.put("/:name", updateLink);
router.delete("/:name", deleteLink);

module.exports = router;
