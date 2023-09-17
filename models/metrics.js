const mongoose = require("mongoose");

const metricsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name."],
      trim: true,
    },
    number: {
      type: Number,
      required: [true, "Please provide number."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Metric", metricsSchema);
