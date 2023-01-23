const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please enter the book title"],
    },
    author: {
      type: String,
      required: [true, "Please enter the auth's name"],
    },
    category: {
      type: String,
      required: [true, "Please select category"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
