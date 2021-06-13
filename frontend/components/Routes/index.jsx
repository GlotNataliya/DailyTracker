import React from 'react';
import { Switch, Route } from "react-router-dom";
import Teams from 'components/Pages/Teams';
import Dashboard from 'components/Pages/Dashboard';
import Employee from 'components/Pages/Employees';
import Setting from 'components/Pages/Settings';
import './style';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Dashboard />
      </Route>
      <Route exact path="/employees">
        <Employee />
      </Route>
      <Route exact path="/teams">
        <Teams />
      </Route>
      <Route exact path="/settings">
        <Setting />
      </Route>
    </Switch>
  );
}

export default Routes;
