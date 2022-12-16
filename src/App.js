// import './App.css';
// npm install react-grid-system --save
import { Container, Row, Col } from "react-grid-system";
import { Visible, Hidden } from "react-grid-system";

import { Content } from './components/contetnt/Content';
import NavBar from './components/navbar/NavBar';
import HeaderTop from './components/header/HeaderTop';
import HeaderLogo from './components/header/HeaderLogo';
import HeaderNavIcons from './components/header/HeaderNavIcons';
// import HeaderSearch from './components/header/HeaderSearch';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <Container >
      <Row align="center">
        <Col >
          <Hidden xs sm>
          <HeaderTop />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between" >
      {/* align="center" */}
        <Col sm={12} md={8}>
        <HeaderLogo />
        </Col>
        <Col >
          <Hidden xs sm>
          <HeaderNavIcons />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between">      {/* align="center" */}
        <Col md={12} xs="content" >         {/* xs="content" */}
          <NavBar />
        </Col>
        <Row justify="end">
        <Col >
        <Visible sm xs>
          <HeaderNavIcons />
        </Visible>
        </Col>
        </Row>
      </Row>
      
      <Row>
        <Content />
      </Row>
      <Row>
      <Footer />
      </Row>

    </Container>
  );
}




