import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import NavBar from '../navbar/NavBar';
import HeaderTop from './HeaderTop';
import HeaderLogo from './HeaderLogo';
import HeaderNavIcons from './HeaderNavIcons';

export function Header() {
  return (
    <Container className='px-0 my-0 pb-3' >
    <Row >
    <Col md={12} className="d-none d-md-block ">
    <HeaderTop />
    </Col>
    <Col xs={12} md={8}>
      <HeaderLogo />
    </Col>
    <Col
      xs={{ span: 8, order: 2 }}
      md={{ span: 4, order: 1 }}
    >
      <HeaderNavIcons />
    </Col>
    <Col
      xs={{ span: 4, order: 1 }}
      md={{ span: 12, order: 2 }}
    >
      <NavBar />
    </Col>
  </Row>
  </Container>
  )
}


