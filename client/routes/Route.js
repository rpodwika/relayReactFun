import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';

import ViewerQuery from './ViewerQuery';
import TodoQuery from './TodoQuery';
import AppContainer from '../components/App/AppContainer';
import FeatureContainer from '../components/Feature/FeatureContainer';
import SignupComponent from '../components/Signup/SignupComponent';
import LoginComponent from '../components/Login/LoginComponent';
import TodoComponent from '../components/Todo/TodoComponent';

export default (
  <Route path='/' component={AppContainer} queries={ViewerQuery}>
    <IndexRoute component={FeatureContainer} queries={ViewerQuery} />
    <Route path='/signup' component={SignupComponent} />
    <Route path='/login' component={LoginComponent} />
    <Route path='/todos' component={TodoComponent} queries={TodoQuery} />
    <Redirect from='*' to='/' />
  </Route>
);

