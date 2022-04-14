import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.play = this.playFunction.bind(this)
  }

  playFunction() {
    console.log("Hola mundo") 
  }
  render() {
    return (
      <Container id='drum-machine'>
        <Container>
          <Row>
            <Col onClick={this.play} className='drum-pad'>
              Q
              <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              W 
              <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              E
              <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            </Col>
          </Row>
          <Row>
            <Col className='drum-pad'>
              A
              <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              S
              <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              D
              <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            </Col>
          </Row>
          <Row>
            <Col className='drum-pad'>
              Z
              <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              X
              <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            </Col>
            <Col className='drum-pad'>
              C
              <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
            </Col>
          </Row>
        </Container>
        <Container id="display">
          Hola
        </Container>
      </Container>
    );  
}
}

export default App;
