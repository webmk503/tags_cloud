import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import TagsCloudContainer from "./containers/TagsCloudContainer";
import TagContainer from "./containers/TagContainer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={TagsCloudContainer} />
          <Route path="/home/:id" component={TagContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
