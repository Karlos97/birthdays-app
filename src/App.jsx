import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import BooksList from './components/booksList/BooksList';
import Layout from './components/Layout/Layout';
import {
  appNamePathUsedInRouting,
  bookDetailsPathUsedInRouting,
} from './config/config';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <BooksList />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
