import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import RiddleList from './components/RiddleList/RiddleList';
import Layout from './components/Layout/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact>
          <RiddleList />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
