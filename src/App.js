import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/NavbarComponent';
import TitlebarComponent from './Components/TitlebarComponent';
import MoviesList from './Components/MoviesList';
import FooterComponent from './Components/FooterComponent';
import { Container, Row } from 'react-bootstrap';

function App () {
  return (
    <div className="App">
      <NavbarComponent />
      <TitlebarComponent />
      <Container fluid>
        <Row>
          <h3 className='text-white'>Batman</h3>
        </Row>
        <MoviesList movieSearch="batman" />

        <Row>
          <h3 className='text-white'>Rocky</h3>
        </Row>
        <MoviesList movieSearch="rocky" />

        <Row>
          <h3 className='text-white'>The Hobbit</h3>
        </Row>
        <MoviesList movieSearch="the%20hobbit" />

        <Row>
          <h3 className='text-white'>Avengers</h3>
        </Row>
        <MoviesList movieSearch="iron%20man" />
      </Container>
      <FooterComponent />
    </div>
  );
}
export default App;
