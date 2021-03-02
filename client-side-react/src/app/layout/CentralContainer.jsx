import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
export const CentralContainer = () => {
    return (
        <Grid columns='three' divided align="center" style={{ marginTop: "6%" }}>
            <Grid.Row >
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <Segment.Group raised>
                        <Segment>Day</Segment>
                        <Segment>what garbage?</Segment>
                        <Segment>edit button</Segment>
                    </Segment.Group>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
