import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Book from './Book/Book';
import classes from './BooksList.module.scss';

const BooksList = () => {
  return (
    <Fragment>
      <ul className={classes['books-list']}>
        <Book
          question="Co jest piekne i brzydkie?"
          answer="Lama"
          reward="kordy"
        />
        <Book question="Co jest piekne i brzydkie?" answer="Cegla" />
      </ul>
    </Fragment>
  );
};
export default BooksList;
