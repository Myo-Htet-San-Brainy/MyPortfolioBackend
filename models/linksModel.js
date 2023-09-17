const mongoose = require("mongoose");

const linksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name."],
      trim: true,
    },
    link: {
      type: String,
      required: [true, "Please provide link."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Link", linksSchema);
