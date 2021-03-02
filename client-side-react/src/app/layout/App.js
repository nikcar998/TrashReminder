import './App.css';
import { Navbar } from './Navbar'
import { Container } from 'semantic-ui-react'
import { CentralContainer } from './CentralContainer';

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
      <Navbar />
      <CentralContainer />
    </Container>
  );
}

export default App;
