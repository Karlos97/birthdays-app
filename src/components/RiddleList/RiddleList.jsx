import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Riddle from './Riddle/Riddle';
import classes from './RiddleList.module.scss';

const RiddleList = () => {
  return (
    <Fragment>
      <ul className={classes['riddles-list']}>
        <Riddle
          question="Co jest piekne i brzydkie?"
          answer="Lama"
          reward="53.01108, 18.60819"
        />
        <Riddle
          question="Co jest piekne i brzydkie?"
          answer="53.0081, 18.6040"
        />
      </ul>
    </Fragment>
  );
};

export default RiddleList;
