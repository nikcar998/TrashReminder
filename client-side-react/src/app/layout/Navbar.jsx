import React from 'react'
import { Menu, Icon, Header } from 'semantic-ui-react'

export const Navbar = () => {
    return (
        <Menu>
            <Menu.Item
                name='Title'
            >
                <Header as='h5' className="ui green header"><Icon disabled name='trash' />TrashReminder</Header>
            </Menu.Item>
            <Menu.Item
                name='logout'
                position='right'
            >
                Logout
        </Menu.Item>
        </Menu>
    )
}
