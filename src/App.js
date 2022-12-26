// import './App.css';
// npm install react-grid-system --save
import { Container, Row, Col } from "react-grid-system";
import { Visible, Hidden } from "react-grid-system";

import { Content } from './components/contetnt/Content';
import NavBar from './components/navbar/NavBar';
import HeaderTop from './components/header/HeaderTop';
import HeaderLogo from './components/header/HeaderLogo';
import HeaderNavIcons from './components/header/HeaderNavIcons';
import {Footer} from './components/footer/Footer';

export default function App() {
  const styleContent = {background: '#f5f5f5'};
  return (
    <Container fluid  className="p-0 bg-white">
      <Container> 
      <Row align="center">
        <Col >
          <Hidden xs sm>
          <HeaderTop />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between" >
      {/* align="center" */}
        <Col sx={12} md={8}>
        <HeaderLogo />
        </Col>
        <Col >
          <Hidden xs sm>
          <HeaderNavIcons />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between">      
        <Col md={12} xs="content" >         
          <NavBar />
        </Col>
        <Col >
        <Visible sm xs>
          <HeaderNavIcons />
        </Visible>
        </Col>
      </Row>
      </Container> 
      <hr className='my-0'/>
    
      <Container fluid className="py-md-3" style={styleContent}>
      <Container className="px-0 pt-3 mx-auto bg-white">
      <Row>
        <Content />
      </Row>
      </Container>
      </Container>

      <Row>
      <Footer />
      </Row>

    </Container>
  );
}