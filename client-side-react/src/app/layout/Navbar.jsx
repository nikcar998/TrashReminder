import React from "react";
import { Menu, Icon, Header, Button } from "semantic-ui-react";
import agent from "../api/agent";

//a basic navbar, here you can click the logo and comeback to the homepage
//or click the right button and logout
export const Navbar = () => {

  function logout() {
    agent.User.logout().then((resp) => {
      console.log(resp);
      localStorage.removeItem("TR_token");
      window.location = "/";
    });
  }

  return (
    <Menu>
      <Menu.Item name="Title">
        <a href="/">
          <Header as="h5" className="ui green header">
            <Icon disabled name="trash" />
            TrashReminder
          </Header>
        </a>
      </Menu.Item>
      <Menu.Item name="logout" position="right">
        <Button inverted secondary onClick={logout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
};
