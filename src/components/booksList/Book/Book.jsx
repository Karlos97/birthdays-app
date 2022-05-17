import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Book.module.scss';

const Book = ({
  question = "What's green, black and is not ginger?",
  answer = 'a',
  reward = 'a',
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const checkAnswer = () => {
    setFirstRender(false);
    if (userAnswer.toLowerCase === answer.toLowerCase) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  return (
    <li className={classes.book}>
      {!firstRender && (
        <p
          className={classes['book-top-subtitle']}
          style={{ color: `${isCorrectAnswer ? 'green' : 'red'}` }}
        >
          {`${isCorrectAnswer ? 'CORRECT!' : 'WRONG!'}`}
        </p>
      )}
      {isCorrectAnswer && (
        <p
          className={classes['book-top-subtitle']}
          style={{ color: `${isCorrectAnswer ? 'green' : 'red'}` }}
        >
          {reward}
        </p>
      )}
      <p className={classes['book-top-subtitle']}>{question}</p>

      <input
        className={classes['input']}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <div className={classes['button']} onClick={() => checkAnswer()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Check!
      </div>
    </li>
  );
};

export default Book;
