import react from 'react'
import './App.css';
import { Menu, Icon, Header, Image, Container, Grid, Segment } from 'semantic-ui-react'

function App() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: "url(/images/nareeta-martin-FoG7PKNYjpM-unsplash.jpg)",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: "100vh",
        margin: 0,
        padding: 0
      }}>
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
      <Grid columns='three' divided align="center" style={{marginTop:"6%"}}>
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
    </Container>
  );
}

export default App;
