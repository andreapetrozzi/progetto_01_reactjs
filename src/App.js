import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/NavbarComponent';
import TitlebarComponent from './Components/TitlebarComponent';
import MoviesList from './Components/MoviesList';
import FooterComponent from './Components/FooterComponent';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
 
      <TitlebarComponent />
 
      <Container fluid>
        <Row>
          <h3>Star Wars</h3>
        </Row>

        <MoviesList movieSearch="star%20wars" />

        <Row>
          <h3>Harry Potter</h3>

        </Row>

        <MoviesList movieSearch="harry%20potter" />
        
        <Row>
          <h3>Avengers</h3>
        </Row>

        <MoviesList movieSearch="avengers" />
      </Container>
 
      <FooterComponent />
    </div>
  );
}

export default App;




// TITOLO: Netflix in React
// Refactoring di un progetto Netflix in JavaScript.
// Dovrà diventare un’applicazione React con fetch dei dati da “The Open Movie Database”.

// Passaggi suggeriti:

// 01 - Crea una nuova react - app, e a partire dal progetto Netflix fornito comincia a trasportare l’interfaccia della home page tramite componenti React(navbar, footer, etc.)

// 02 - Crea, usando componenti, diverse “gallerie” per i film(almeno 3 gallerie con 3 film saga che ti piacciono, esempio: Harry Potter, Lord of the Rings ecc.)

// 03 - Queste gallerie dovranno fare il fetch dei dati da Omdb APIs al caricamento del componente

// 04 - [EXTRA] Aggiungi dei loader e gestione errori nella pagina principale


// ATTENZIONE: 
// API Docs:
// Registrati su http://www.omdbapi.com/
// Una volta registrato, riceverai un’email con la API Key.

// ATTENZIONE:
// Per favore ricordati di controllare la struttura della risposta che ottieni da OMDB!
// Ad es.l’array contenente gli oggetti dei film è il valore della proprietà chiamata Search, non la risposta stessa(che è un’oggetto!).
