import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';


const keys = [
  'Q', 
  'W', 
  'E', 
  'A', 
  'S', 
  'D', 
  'Z', 
  'X', 
  'C'
]

class App extends React.Component{
  constructor(props) {
    super(props)
    
  }

  playFunction(c) {
    document.getElementById(c).play()
  }
  handleKey = (event) => {
    
  }
  render() {
    return (
      <Container id='drum-machine'>
        <Container>
          <Row>
            <Col onKeyDown={this.handleKey} onClick={() => this.playFunction('Q')} className='drum-pad'>
              Q
              <audio  className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('W')} className='drum-pad'>
              W 
              <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('E')} className='drum-pad'>
              E
              <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
            </Col>
          </Row>
          <Row>
            <Col onClick={() => this.playFunction('A')} className='drum-pad'>
              A
              <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('S')} className='drum-pad'>
              S
              <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('D')} className='drum-pad'>
              D
              <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
            </Col>
          </Row>
          <Row>
            <Col onClick={() => this.playFunction('Z')} className='drum-pad'>
              Z
              <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('X')} className='drum-pad'>
              X
              <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
            </Col>
            <Col onClick={() => this.playFunction('C')} className='drum-pad'>
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
