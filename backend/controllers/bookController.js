const asyncHanlder = require("express-async-handler");

// @desc    Get books
// @route   Get api/books
// @access  Private
exports.getBooks = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: "Get books" });
});

// @desc    Set book
// @route   POST api/books
// @access  Public
exports.setBooks = asyncHanlder(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(201).json({ message: "Set books" });
});

// @desc    Update book
// @route   PUT api/books/:id
// @access  Private
exports.updateBooks = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: `Update book ${req.params.id}` });
});

// @desc    Delete book
// @route   DELETE api/books/:id
// @access  Private
exports.deleteBooks = asyncHanlder(async (req, res) => {
  res.status(200).json({ message: `Delete book ${req.params.id}` });
});
