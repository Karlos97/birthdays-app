import React, { useState } from 'react';
import classes from './Riddle.module.scss';

const Riddle = ({
  question = "What's green, black and is not ginger?",
  answer = 'a',
  reward = 'a',
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  const checkAnswer = () => {
    setFirstRender(false);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };

  return (
    <li className={classes.riddle}>
      {!firstRender && (
        <p
          className={classes['riddle-top-subtitle']}
          style={{ color: `${isCorrectAnswer ? 'green' : 'red'}` }}
        >
          {`${isCorrectAnswer ? 'CORRECT!' : 'WRONG!'}`}
        </p>
      )}
      {isCorrectAnswer && (
        <p
          className={classes['riddle-top-subtitle']}
          style={{ color: `${isCorrectAnswer ? 'green' : 'red'}` }}
        >
          {reward}
        </p>
      )}
      <p className={classes['riddle-top-subtitle']}>{question}</p>

      <input
        className={classes['input']}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <div>
        <div className={classes['button']} onClick={setIsCorrectAnswer}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get answer now!
        </div>
        <div className={classes['button']} onClick={() => checkAnswer()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Check!
        </div>
      </div>
    </li>
  );
};

export default Riddle;
