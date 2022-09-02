import tempus_logo from './media/TEMPUS.jpg'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id={"logo"} src={tempus_logo} alt={"TEMPUS LOGOS"} />
        <Container>
          <Row md={3}>
            <Col>
              <div className={"TeamMembers"}>
                <ul>
                  <li>Project Manager: Ethan Yaccarino-Mims</li>
                  <li>Communications Manager: Raavi Chowdhury</li>
                  <li>Johann Lee</li>
                  <li>Bradley Boxer</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>


      </header>
    </div>
  );
}

export default App;
