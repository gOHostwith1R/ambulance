import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignUp from '../../features/Auth/SignUp';
import SignIn from '../../features/Auth/SignIn';
import RestorePasswordEmail from '../../features/Auth/RestorePasswordEmail';
import RestoreMessage from '../../features/Auth/RestoreMessage';
import PatientsPage from '../../features/Patient/PatientsPage';
import AppointmentsPage from '../../features/Appointment/AppointmentsPage';
import MakeAppointmentsPage from '../../features/Appointment/MakeAppointment';
import { useAppSelector } from '../../store';
import { Profile } from '../../features/Profile';
import { NotFoundPage } from '../../features/Auth';
import { Resolutions } from '../../features/Resolutions';

// eslint-disable-next-line consistent-return
const useRoutes = () => {
  const auth = useAppSelector((state) => state.user.auth);
  if (!auth) {
    return (
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/restore-password-email">
          <RestorePasswordEmail />
        </Route>
        <Route path="/restore-message">
          <RestoreMessage />
        </Route>
        <Route path="/404">
          <NotFoundPage />
        </Route>
        <Redirect to="/404" />
      </Switch>
    );
  }
  const role = localStorage.getItem('role');
  if (role === 'Patient') {
    return (
      <Switch>
        <Route exact path="/appointments">
          <AppointmentsPage />
        </Route>
        <Route path="/appointments/make">
          <MakeAppointmentsPage />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/resolutions">
          <Resolutions />
        </Route>
        <Redirect to="/appointments" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/patients">
        <PatientsPage />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/resolutions">
        <Resolutions />
      </Route>
      <Redirect to="/patients" />
    </Switch>
  );
};

export default useRoutes;
