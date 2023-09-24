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
const { authorize } = require("../middleware/authorization");

router.get("/", getProjects);
router.post("/", authorize, createProject);
router.put("/:id", authorize, updateProject);
router.delete("/:id", authorize, deleteProject);

module.exports = router;
