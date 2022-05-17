import { useLocation } from 'react-router-dom';
import React, { useRef } from 'react';
import Header from './Header/Header';
import MainNavigation from './MainNavigation/MainNavigation';
import classes from './Layout.module.scss';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const listInnerRef = useRef();

  const isMainpage = pathname === '/birthdays-app/';

  const mainElementClass = !isMainpage
    ? classes['riddle-list']
    : classes['riddle-details'];

  return (
    <>
      <div className={classes.app} ref={listInnerRef}>
        <Header />
        {!isMainpage && <MainNavigation />}
        <main className={mainElementClass}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
