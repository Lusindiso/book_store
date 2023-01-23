const router = require("express").Router();
const {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getBooks);

router.post("/", protect, setBooks);

router.put("/:id", protect, updateBooks);

router.delete("/:id", protect, deleteBooks);

module.exports = router;
