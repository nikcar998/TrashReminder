import React, { Fragment } from "react";
import { Grid, Segment, Button, Header, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Welcome = () => {
  const token = localStorage.getItem("TR_token");
  return (
    <Fragment>
      <Segment>
        <Header as="h2">
          Benvenuti su{" "}
          <span style={{ color: "green" }}>
            <Icon disabled name="trash" />
            TrashReminder
          </span>
          !
        </Header>
        <Header as="h3">Effettuate il login o registratevi!</Header>
      </Segment>
      <Segment>
        {token ? (
          <Fragment>
            <Button as={Link} to="/garbageDay" primary>
              Home
            </Button>
            <Header as="h5">
              Vuoi accedere da un altro account o il tuo token è scaduto? premi
              qui!
            </Header>
            <Button as={Link} to="/login" primary>
              Login
            </Button>
            <Button as={Link} to="/register" secondary>
              Register
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <Button as={Link} to="/login" primary>
              Login
            </Button>
            <Button as={Link} to="/register" secondary>
              Register
            </Button>
          </Fragment>
        )}
      </Segment>
    </Fragment>
  );
};
