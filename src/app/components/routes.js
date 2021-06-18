import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
// comps
import ConformForm from "./form/conformForm";
import ListConform from "./list/listConform";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/conformForm" render={(props) => <ConformForm />} />
        <Route exact path="/listConform" render={(props) => <ListConform />} />
        <Redirect to="/listConform" />
      </Switch>
    </Router>
  );
};

export default Routes;
