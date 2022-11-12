import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import classes from './Book.module.css';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const removeBookHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  return (
    <div className={classes.container}>
      <div className={classes.book}>
        <div className={classes.category}>{category}</div>
        <h3 className="title">{title}</h3>
        <div className="author">{author}</div>
        <div className={classes.buttons}>
          <button type="button">Comments</button>
          <button id={id} type="button" onClick={removeBookHandler}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className={classes.right}>
        <div className="flex items-center gap-4">
          <div className="w-[4.25rem] h-[4.25rem]">
            <CircularProgressbar value={67} />
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <p className="text-[2rem] text-[#121212]">
              {67}
              %
            </p>
            <span className="text-[0.875rem] text-[#121212] opacity-[0.5]">
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className={classes.chapter}>
        <h3>Current chapter</h3>
        <p>Chapter 17</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
