//packages
const express = require("express");
const router = express.Router();

//imports
const {
  getProjects,
  updateProject,
  deleteProject,
  createProject,
} = require("../controllers/projectsController");

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
