import React from "react";
import { Switch, Route } from "react-router-dom";
import { HOME, PACIENT_PROFILE } from "./paths";

import Home from "../containers/home";
import PacientProfile from "../containers/pacient-profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME} component={Home} />
      <Route exact path={PACIENT_PROFILE} component={PacientProfile} />
    </Switch>
  );
};

export default Routes;
