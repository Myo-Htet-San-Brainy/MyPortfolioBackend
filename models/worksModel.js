const mongoose = require("mongoose");

const worksSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dhwwdk7uq/image/upload/v1690823157/21daysUserImages/file_bwxexw.jpg",
      required: [true, "Please provide img."],
    },
    name: {
      type: String,
      required: [true, "Please provide name."],
    },
    text: {
      type: String,
      required: [true, "Please provide work text."],
    },
    client: {
      name: {
        type: String,
        required: [true, "Please provide client name."],
      },
      review: {
        type: String,
        required: [true, "Please provide client review."],
      },
    },
    siteUrl: {
      type: String,
      required: [true, "Please provide site url."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", worksSchema);
