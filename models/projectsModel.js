const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      required: [true, "Please provide img."],
    },
    name: {
      type: String,
      required: [true, "Please provide name."],
    },
    text: {
      type: String,
      required: [true, "Please provide project text."],
    },
    gitHubLink: {
      type: String,
      required: [true, "Please provide project github link."],
    },
    siteUrl: {
      type: String,
      required: [true, "Please provide project siteUrl."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectsSchema);
