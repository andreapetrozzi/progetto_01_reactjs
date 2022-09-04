import { Component } from "react";
import { Accordion, Figure } from "react-bootstrap";

class Movie extends Component {
  state = {};

  render() {
    return (
      <Accordion defaultActiveKey="1">

        <Figure>
        
          <Accordion.Toggle eventKey="0">
            <Figure.Image
              width={140}
              height={120}
              alt={this.props.movieItem.imbdID}
              src={this.props.movieItem.Poster}
            />
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Figure.Caption>{this.props.movieItem.Title}</Figure.Caption>
          </Accordion.Collapse>
          
        </Figure>

      </Accordion>
    );
  }
}

export default Movie;
