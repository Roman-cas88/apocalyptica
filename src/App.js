// import './App.css';
// npm install react-grid-system --save
import { Container, Row, Col } from "react-grid-system";
import { Visible, Hidden } from "react-grid-system";

import { Content } from './components/contetnt/Content';
import NavBar from './components/navbar/NavBar';
import HeaderTop from './components/header/HeaderTop';
import HeaderLogo from './components/header/HeaderLogo';
import HeaderNavIcons from './components/header/HeaderNavIcons';


export default function App() {
  // return (
  //   <>
  //     <HeaderTop />    
  //     <HeaderMain />
  //     <HeaderNavIcons />
  //     <NavBar />
  //     <Content />
  //   </>
  // );
  return (
    <Container>
      <Row debug>
        <Col xs={12} justify="end" debug>
          <Hidden xs sm>
          <HeaderTop />
          </Hidden>
        </Col>
      </Row>
      <Row justify="between" align="center" debug>
        <Col sm={12} md={8} debug>
        <HeaderLogo />
        </Col>
        <Col justify="end" debug>
          <Hidden xs sm>
          <HeaderNavIcons />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between" debug>
        <Col md={12} debug>
        <NavBar />
        </Col>
        <Col >
        <Visible sm xs>
          <HeaderNavIcons />
        </Visible>
        </Col>
      </Row>
      <Row>
        <Content />
      </Row>
      <br />
    </Container>
  );
}




