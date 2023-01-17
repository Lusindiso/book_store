const router = require("express").Router();
const {
  getBooks,
  setBooks,
  updateBooks,
  deleteBooks,
} = require("../controllers/bookController");

router.get("/", getBooks);

router.post("/", setBooks);

router.put("/:id", updateBooks);

router.delete("/:id", deleteBooks);

module.exports = router;
