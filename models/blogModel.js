const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema(
  {
    img: {
      type: String,
      default:
        "https://res.cloudinary.com/dhwwdk7uq/image/upload/v1710056829/blog_pvr9y0.png",
      required: [true, "Please provide img."],
    },
    name: {
      type: String,
      required: [true, "Please provide blog name."],
    },
    text: {
      type: String,
      required: [true, "Please provide blog text."],
    },
    readTime: {
      type: String,
      required: [true, "Please provide blog readTime."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogsSchema);
