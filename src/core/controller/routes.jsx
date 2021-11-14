import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../../pages/Auth/SignUp';
import SignIn from '../../pages/Auth/SignIn';
import RestorePasswordEmail from '../../pages/Auth/RestorePasswordEmail';
import RestoreMessage from '../../pages/Auth/RestoreMessage';
import MainPage from '../../pages/MainPage/MainPage';
import AppointmentsPage from '../../pages/MainPage/AppointmentsPage';

const useRoutes = () => (
  <Switch>
    <Route path="/sign-up">
      <SignUp />
    </Route>
    <Route path="/sign-in">
      <SignIn />
    </Route>
    <Route path="/restore-password-email">
      <RestorePasswordEmail />
    </Route>
    <Route path="/restore-message">
      <RestoreMessage />
    </Route>
    <Route path="/patients">
      <MainPage />
    </Route>
    <Route path="/appointments">
      <AppointmentsPage />
    </Route>
    <Redirect to="/sign-up" />
  </Switch>
);

export default useRoutes;
