import React from "react";
import { Menu, Icon, Header } from "semantic-ui-react";

export const Navbar = () => {
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
        Logout
      </Menu.Item>
    </Menu>
  );
};
