import React, { useState } from 'react';
import classes from './Riddle.module.scss';

const Riddle = ({
  question = "What's green, black and is not ginger?",
  answer = 'a',
  reward = 'a',
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswer, setIsAnswer] = useState({ label: '', value: false });
  const [firstAnswer, setFirstAnswer] = useState(true);
  const isPhraseCorrect = (phrase) => !!/^[a-zA-Z ]+$/.test(phrase);

  const checkAnswer = () => {
    setFirstAnswer(false);
    if (!isPhraseCorrect(userAnswer))
      return setIsAnswer({ label: "Don't use Polish signs!", value: false });

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setIsAnswer({ label: 'CORRECT!', value: true });
    } else {
      setIsAnswer({ label: 'WRONG!', value: false });
    }
  };

  return (
    <div className={classes['riddle-wrapper']}>
      <div
        className={`${classes['button']} ${classes['button-answer']}`}
        onClick={() =>
          setIsAnswer({
            label:
              'Oj Ty kolego chyba chodziles bardziej na A a aaautomatyke niz robotyke :)',
            value: true,
          })
        }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Solution
      </div>
      <li className={classes.riddle}>
        {(!firstAnswer || isAnswer.value) && (
          <p
            className={classes['riddle-top-subtitle']}
            style={{ color: `${isAnswer.value ? 'green' : 'red'}` }}
          >
            {isAnswer?.label}
          </p>
        )}
        {isAnswer?.value && (
          <p
            className={classes['riddle-top-subtitle']}
            style={{ color: `${isAnswer?.value ? 'green' : 'red'}` }}
          >
            {reward}
          </p>
        )}
        <p className={classes['riddle-top-subtitle']}>{question}</p>

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
    </div>
  );
};

export default Riddle;
