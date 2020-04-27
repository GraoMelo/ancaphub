import React from "react";
import Template from "../components/template";
import routes from "./allRoutes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            exact={route.exact}
            path={route.path}
            key={index}
            component={(props) => (
              <Template>
                <route.component {...props} />
              </Template>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};
