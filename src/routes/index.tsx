import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
  </Switch>
);

export default Routes;
