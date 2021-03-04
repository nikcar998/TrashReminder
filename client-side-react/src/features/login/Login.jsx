import React, { Fragment, useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import agent from "../../app/api/agent";
import { useHistory } from "react-router-dom";

//this compontent let the user login, then sets the token that the user will use in all his operations.
//The token will be saved in localstorage.
export const Login = () => {
  const history = useHistory();

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  function handleSubmit() {
    agent.User.login(user).then((resp) => {
      console.log(resp);
      localStorage.setItem("TR_token", resp.token);
      history.push("/");
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Fragment>
      <Segment>
        <Header as="h2">Login!</Header>
      </Segment>
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Group inline>
            <Form.Input
              required
              placeholder="mario@rossi.com"
              name="email"
              label="Email"
              value={user.email}
              onChange={handleInputChange}
            />
            <Form.Input
              required
              placeholder="password"
              name="password"
              label="Password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group style={{ justifyContent: "center" }}>
            <Form.Button content="Login" type="submit" />
          </Form.Group>
        </Form>
      </Segment>
    </Fragment>
  );
};
