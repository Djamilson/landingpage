import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import PrivacyPolicy from '../pages/Terms/PrivacyPolicy';
import TermsOfUse from '../pages/Terms/TermsOfUse';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />

    <Route path="/termsofuse" exact component={TermsOfUse} />

    <Route path="/privacypolicy" exact component={PrivacyPolicy} />
  </Switch>
);

export default Routes;
