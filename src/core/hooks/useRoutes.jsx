import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignUp from '../../features/Auth/pages/SignUp';
import SignIn from '../../features/Auth/pages/SignIn';
import RestorePasswordEmail from '../../features/Auth/pages/RestorePasswordEmail';
import RestoreMessage from '../../features/Auth/pages/RestoreMessage';
import PatientsPage from '../../Pages/mainPages/PatientsPage';
import AppointmentsPage from '../../Pages/mainPages/AppointmentsPage';
import MakeAppointmentsPage from '../../Pages/mainPages/MakeAppointment';
import { userSelector } from '../../store/slices/userSlice';

// eslint-disable-next-line consistent-return
const useRoutes = () => {
  const { auth, userProfile } = useSelector(userSelector);
  console.log(userProfile);
  if (!auth) {
    return (
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
        <Redirect to="/sign-up" />
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
        <Redirect to="/appointments" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/patients">
        <PatientsPage />
      </Route>
      <Route exact path="/appointments">
        <AppointmentsPage />
      </Route>
      <Route path="/appointments/make">
        <MakeAppointmentsPage />
      </Route>
      <Redirect to="/patients" />
    </Switch>
  );
};

export default useRoutes;
