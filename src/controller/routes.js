import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import RestorePassword from "../components/RestorePassword";
import Patients from "../components/Patients";

const useRoutes = () => {
    return (
      <Switch>
          <Route path='/sign-up'>
              <SignUp />
          </Route>
          <Route path='/sign-in'>
              <SignIn />
          </Route>
          <Route path='/restore-password'>
              <RestorePassword />
          </Route>
          <Route path='/patients'>
              <Patients />
          </Route>
          <Redirect to='/sign-up' />
      </Switch>
    );
}

export default useRoutes;