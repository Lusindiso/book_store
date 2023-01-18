const Book = require("../models/bookModel");
const asyncHanlder = require("express-async-handler");

// @desc    Get books
// @route   Get api/books
// @access  Private
exports.getBooks = asyncHanlder(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

// @desc    Set book
// @route   POST api/books
// @access  Public
exports.setBooks = asyncHanlder(async (req, res) => {
  const { title, author, category } = req.body;

  const book = await Book.create({
    title,
    author,
    category,
  });

  res.status(201).json(book);
});

// @desc    Update book
// @route   PUT api/books/:id
// @access  Private
exports.updateBooks = asyncHanlder(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book not found!");
  }

  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
});

// @desc    Delete book
// @route   DELETE api/books/:id
// @access  Private
exports.deleteBooks = asyncHanlder(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error("Book not found!");
  }
  await book.remove();
  res.status(200).json({ id: req.params.id });
});
