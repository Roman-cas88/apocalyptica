// import './App.css';
// npm install react-grid-system --save
import { Container, Row, Col } from "react-grid-system";
import { Visible, Hidden } from "react-grid-system";

import { Content } from './components/contetnt/Content';
import NavBar from './components/navbar/NavBar';
import HeaderTop from './components/header/HeaderTop';
import HeaderLogo from './components/header/HeaderLogo';
import HeaderNavIcons from './components/header/HeaderNavIcons';
import HeaderSearch from './components/header/HeaderSearch';

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
    <Container fluid>
      <Row align="center">
        <Col >
          <Hidden xs sm>
          <HeaderTop />
          </Hidden>
        </Col>
      </Row>
      <Row justify="between" align="center">
        <Col sm={12} md={8}>
        <HeaderLogo />
        </Col>
        <Col justify="end" >
          <Hidden xs sm>
          <HeaderNavIcons />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between" align="center">
        <Col md={12} xs="content">
          <NavBar />
        </Col>
        <Col xs="content">
        <Visible sm xs>
          <HeaderNavIcons />
        </Visible>
        </Col>
      </Row>

      <Row>
        <HeaderSearch />
      </Row>
      
      <Row>
        <Content />
      </Row>
      <br />
    </Container>
  );
}




