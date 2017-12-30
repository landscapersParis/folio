import React from "react";
import { Route } from 'react-router-dom';
import App from "containers/App/App";
import LPsMake from "containers/LPsMake/LPsMake";
import Pride from "containers/Pride/Pride";
import KnowHow from "containers/KnowHow/KnowHow";
import WhoIAm from "containers/WhoIAm/WhoIAm";
import { ConnectedRouter as Router } from 'react-router-redux';

export default function createRoutes(store, history) {
  return (
    <Router history={history}>
      <div>
        <App>
          <Route exact path="/" component={LPsMake} />
          <Route path="/pride" component={Pride} />
          <Route path="/knowhow" component={KnowHow} />
          <Route path="/whoiam" component={WhoIAm} />
        </App>
      </div>
    </Router>
  );
}
