import React, { Fragment } from 'react'
import { Grid, Segment, Button, Header, Icon } from 'semantic-ui-react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Welcome = () => {
    return (
        <Fragment >
            <Segment>
                <Header as="h2">Welcome in <span style={{ color: "green" }}><Icon disabled name='trash' />TrashReminder</span>!</Header>
                <Header as="h3">Sign In or Sign up!</Header>
            </Segment>
            <Segment>
                <Button as={Link} to="/login" primary>Sign In</Button>
                <Button color='grey'>Sign up</Button>
            </Segment>
        </Fragment>
    )
}
