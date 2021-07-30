import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import {
  progress, progressLabel, bookDetails, bookItem, flex, buttons,
  bookItemSection, progressDetails, button, bookCategory,
  commentButton, bookTitle, progressLabelText, chapterTitle, currentChapter,
  updateButton,
} from '../style/app.module.css';

function Book(props) {
  const { book, handleRemove } = props;

  const circularProgressStyle = {
    width: '4em',
    height: '4em',
    color: 'var(--blue)',
  };

  const getCurrentChapter = (progress) => {
    console.log(progress);
    let chapter;
    const chapterNumber = Math.floor(progress / 2);

    switch (true) {
      case (progress < 10):
        chapter = 'Introduction';
        break;
      case progress < 25:
        chapter = `Chapter ${chapterNumber}:'The process begins'`;
        break;
      case progress < 50:
        chapter = `Chapter ${chapterNumber}:'It'll never end'`;
        break;
      case (progress < 75):
        chapter = `Chapter ${chapterNumber}`;
        break;
      case progress < 99:
        chapter = `Chapter ${chapterNumber}:'Far away'`;
        break;
      case progress === 100:
        chapter = 'Last chapter';
        break;
      default:
        break;
    }
    return chapter;
  };

  return (
    <li className={`${flex} ${bookItem}`}>
      <div className={`${bookItemSection} ${bookDetails}`}>
        <h1 className={bookCategory}>{book.category}</h1>
        <h2 className={bookTitle}>{book.title}</h2>
        <div className={`${flex} ${buttons}`}>
          <button className={commentButton} type="button">Comments</button>
          <button
            type="button"
            className={button}
            onClick={() => { handleRemove(book); }}
          >
            Remove
          </button>
          <button className={button} type="button">Edit</button>
        </div>

      </div>

      <div className={`${bookItemSection} ${progress} ${flex}`}>

        <CircularProgress variant="determinate" style={circularProgressStyle} value={book.progress} />
        <div className={progressLabel}>
          {book.progress}
          %
          <br />
          <span className={progressLabelText}>Completed</span>
        </div>

      </div>

      <div className={`${bookItemSection} ${progressDetails}`}>
        <h3 className={chapterTitle}>CURRENT CHAPTER</h3>
        <p className={currentChapter}>{getCurrentChapter(book.progress)}</p>
        <button className={updateButton} type="button">UPDATE PROGRESS</button>
      </div>

      <div />
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Book;
