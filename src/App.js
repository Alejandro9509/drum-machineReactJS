import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect} from 'react';


const keys = [
  ['Q', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', 'Heater1'], 
  ['W', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', 'Heater2'], 
  ['E', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', 'Heater3'], 
  ['A', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', 'Heater4'], 
  ['S', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', 'Heater6'], 
  ['D', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', 'Dsc_Oh'], 
  ['Z', 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', 'Kick_n_hat'], 
  ['X', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', 'Kick'], 
  ['C', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' , 'Cev']

]

function App () {
    useEffect(() => {
      window.addEventListener('keydown', e => {
        keys.map((item ) => {
          if(item[0] == e.key.toUpperCase()){
            playFunction(item[0], item[2])
          }
        })
      });
    }, []);
    const playFunction = (c, t) =>  {
      document.getElementById(c).play()
      document.getElementById('display').innerText = t
    }
    return(
      <Container  id='drum-machine'>
        <Container>
          <Row>
            {
              keys.slice(0, 3).map((item) => 
                <Col id={item[2]} onClick={() => playFunction(item[0], item[2])} key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
          <Row>
          {
              keys.slice(3, 6).map((item) => 
                <Col id={item[2]}  onClick={() => playFunction(item[0], item[2])} key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
          <Row>
          {
              keys.slice(6, 9).map((item) => 
                <Col id={item[2]}  onClick={() => playFunction(item[0], item[2])} key={item[0]} className='drum-pad'>
                  {item[0]}
                  <audio  className="clip" id={item[0]} src={item[1]}></audio>
                </Col>
              )
            }
          </Row>
        </Container>
        <Container id="display">
         
        </Container>
      </Container>)
}

export default App;
