import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../../Pages/authPages/SignUp';
import SignIn from '../../Pages/authPages/SignIn';
import RestorePasswordEmail from '../../Pages/authPages/RestorePasswordEmail';
import RestoreMessage from '../../Pages/authPages/RestoreMessage';
import PatientsPage from '../../Pages/mainPages/PatientsPage';
import AppointmentsPage from '../../Pages/mainPages/AppointmentsPage';
import MakeAppointmentsPage from '../../Pages/mainPages/MakeAppointment';

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
      <PatientsPage />
    </Route>
    <Route path="/appointments">
      <AppointmentsPage />
    </Route>
    <Route path="/make-appointments">
      <MakeAppointmentsPage />
    </Route>
    <Redirect to="/sign-up" />
  </Switch>
);

export default useRoutes;
