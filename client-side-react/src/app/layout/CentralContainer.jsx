import React from "react";
import { Grid, Segment, Button, Header, Icon } from "semantic-ui-react";
import { Welcome } from "../../features/welcome/Welcome";
import agent from "../api/agent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "../../features/login/Login";
import { Register } from "../../features/register/Register";
import { GarbageDayTable } from "../../features/garbageTimeTables/GarbageDayTable";
import { Edit } from "../../features/edit/Edit";

export const CentralContainer = () => {
  return (
    <Grid centered style={{ marginTop: "6%" }}>
      <Grid.Row centered>
        <Grid.Column width={5}>
          <Segment.Group raised align="center">
            <Router>
              <Switch>
                <Route path="/" exact>
                  <Welcome />
                </Route>
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/register" exact>
                  <Register />
                </Route>
                <Route path="/garbageDay" exact>
                  <GarbageDayTable />
                </Route>
                <Route path="/edit" exact>
                  <Edit />
                </Route>
              </Switch>
            </Router>
          </Segment.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
