import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// comps
import ConformForm from "./conformForm";
import ListConform from "./listConform";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/conformForm" render={(props) => <ConformForm />} />
        <Route exact path="/listConform" render={(props) => <ListConform />} />
      </Switch>
    </Router>
  );
};

export default Routes;
