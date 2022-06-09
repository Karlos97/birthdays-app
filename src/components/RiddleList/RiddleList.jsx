import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Riddle from './Riddle/Riddle';
import classes from './RiddleList.module.scss';

const RiddleList = () => {
  return (
    <Fragment>
      <ul className={classes['riddles-list']}>
        <Riddle
          question="Czy jesli Mariusz Pudzianowski bylby pierwszy w kulach to czy cos by to dalo?"
          answer="to by nic nie dalo"
          reward="(53.01108,"
        />
        <Riddle
          question="Jak sie nazywa uwielbiany przez studentow, najlepszy wykladowca politechniki Poznanskiej?"
          answer="Warczynski"
          reward=" 18.60819)"
        />
        <Riddle
          question="Gdzie w ubieglych latach można bylo zjesc najlepszego kebsa w Poznaniu?"
          answer="u dziadka"
          reward="(53.0081,"
        />
        <Riddle
          question="Gdzie jest tangensa alfa?"
          answer="tu"
          reward=" 18.6040)"
        />
      </ul>
    </Fragment>
  );
};

export default RiddleList;
