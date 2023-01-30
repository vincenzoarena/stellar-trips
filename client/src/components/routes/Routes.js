import React from "react";
import Bio from "../components/bio/Bio";
import Bios from "../components/bios/Bios";
import { Route, Switch, Redirect } from "react-router-dom";

const Routes = () => {
  const getBio = (props) => {
    const name = props.match.params.bioName;
    const bioData = this.props.bios.find(
      (d) => d.name.toLowerCase() === name.toLowerCase()
    );
    if (!bioData) {
      return <Redirect to="/contacts" />;
    }
    return <Bio {...bioData} {...props} />;
  };
  return (
    <Switch>
      <Route
        exact
        path="/contacts"
        render={(routerProps) => (
          <Bios bios={this.props.bios} {...routerProps} />
        )}
      />
      <Route exact path="/contacts/:bioName" render={getBio} />
      <Redirect to="/contacts" />
    </Switch>
  );
};

export default Routes;
