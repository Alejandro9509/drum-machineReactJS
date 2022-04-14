import {Container, Row, Col} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect , useRef} from 'react';


const keys = [
  ['Q', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'], 
  ['W', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'], 
  ['E', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'], 
  ['A', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'], 
  ['S', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'], 
  ['D', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'], 
  ['Z', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'], 
  ['X', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'], 
  ['C', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']

]

function App () {

  const playFunction = (c) =>  {
    document.getElementById(c).play()
  }
    return(
      <Container  id='drum-machine'>
        <Container>
          <Row>
            {
              keys.slice(0, 3).map((item) => 
                <Col key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
          <Row>
          {
              keys.slice(3, 6).map((item) => 
                <Col key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
          <Row>
          {
              keys.slice(6, 9).map((item) => 
                <Col key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
        </Container>
        <Container id="display">
          Hola
        </Container>
      </Container>)
}

export default App;
