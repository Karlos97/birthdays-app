import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import classes from './GoBackButton.module.scss';

const GoBackButton = () => (
  <>
    <NavLink
      to="/"
      activeClassName={classes.link.active}
      className={classes.link}
    >
      <HiArrowNarrowLeft className={classes.arrow} />
      <span>Go back!</span>
    </NavLink>
  </>
);

export default GoBackButton;
