import React from 'react';
import GoBackButton from '../../UI/GoBackButton/GoBackButton';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => (
  <nav className={classes.nav}>
    <GoBackButton />
  </nav>
);

export default MainNavigation;
