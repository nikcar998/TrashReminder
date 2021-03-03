import React, { Fragment, useState } from 'react'
import { Segment, Header, Form} from 'semantic-ui-react'
import agent from '../../app/api/agent'

export const Login = () => {
    const initialState = {
        email: "",
        password: ""
    }

    const [user, setUser] = useState(initialState);


    function handleSubmit() {
        agent.User.login(user).then(resp => {
            console.log(resp)
            localStorage.setItem('TR_token', resp.token);
        })
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }


    return (
        <Fragment >
            <Segment>
                <Header as="h2">Login!</Header>
            </Segment>
            <Segment>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder='mario@rossi.com'
                            name='email'
                            value={user.email}
                            onChange={handleInputChange}
                        />
                        <Form.Input
                            placeholder='password'
                            name='password'
                            value={user.password}
                            onChange={handleInputChange}
                        />
                        <Form.Button content='Submit' type="submit" />
                    </Form.Group>
                </Form>
        </Segment>
        </Fragment>
    )
}
