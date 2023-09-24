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
const { authorize } = require("../middleware/authorization");

router.get("/getSocialLinks", getSocialLinks);
router.post("/", authorize, createLink);
router.get("/:name", getLink);
router.put("/:name", authorize, updateLink);
router.delete("/:name", authorize, deleteLink);

module.exports = router;
