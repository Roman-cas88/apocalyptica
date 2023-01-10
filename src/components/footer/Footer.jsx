import React from 'react'
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap/";
import shipping from './img/shipping.png';
import payment1 from './img/payment1.png';
import payment2 from './img/payment2.png';
import payment3 from './img/payment3.png';
import payment4 from './img/payment4.png';
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
// import './footer.css';

export function Footer() {
    return (
        <Container fluid variant='dark' className="text-light bg-dark">
        <Container >
            <Row>
                <Nav className='d-md-none justify-content-around '>
                    <Nav.Link><FiFacebook size={22} style={{ color: "white" }} /></Nav.Link>
                    <Nav.Link><BsInstagram size={22} style={{ color: "white" }} /></Nav.Link>
                    <Nav.Link><BsYoutube size={22} style={{ color: "white" }} /></Nav.Link>
                </Nav>
                <hr className='d-md-none' />
            </Row>
            <Row >
                <Col md={3} >
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 w-100">INFORMATION</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column text-white-50'>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Consumer arbitration</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Cookie-Settings</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Imprint</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Privacy</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Terms and Conditions</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Revocation</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>

                <Col md={2} className="">
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 w-100">SHOP SERVICE</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column p-1'>
                                        <Nav.Link href="#" className='text-white-50 p-1'>FAQ</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>Return Policy</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container >
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>

                <Col md={2}>
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 w-100">SHIPPING</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav >
                                        <Nav.Link href="#">
                                            <img src={shipping} className='p-1' width="82" alt="" />
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>

                <Col md={2}>
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1  w-100">PAIMENT</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column  p-1'>
                                        <Nav.Item >
                                            <img src={payment1} className='p-1' width="82" alt="" />
                                            <img src={payment2} className='p-1' width="82" alt="" />
                                            <img src={payment3} className='p-1' width="82" alt="" />
                                            <img src={payment4} className='p-1' width="82" alt="" />
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>
                <Col md={3}>
                    <Navbar variant='light' expand="md" className='d-none d-md-block flex-column '>
                        <Navbar.Brand href="#" className="text-white h6 fs-6 p-1">CONTACT</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="nav" /> */}
                        <Nav className='flex-column text-white'>
                            <Nav.Item>
                                <Nav.Link href="#" className='text-white  p-1 pb-0'> +49(0)815-123 1234 12</Nav.Link>
                                <Nav.Link href="mailto:support@merchcowboy.com" className='text-white  p-1'>support@merchcowboy.com </Nav.Link>
                            </Nav.Item>
                            <Nav >
                                <Nav.Link href=""><FiFacebook size={22} style={{ color: "white" }} /></Nav.Link>
                                <Nav.Link href=""><BsInstagram size={22} style={{ color: "white" }} /></Nav.Link>
                                <Nav.Link href=""><BsYoutube size={22} style={{ color: "white" }} /></Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar>
                </Col>

            </Row>
            <Row className="text-center text-white-50 my-5"  >
                <p>* All prices incl. value added tax plus. shipping costs and possibly cash on delivery fee, if not otherwise stated</p>
            </Row>
            <Row className=" text-center text-white-50 my-5">
                <p>Theme version: 2022.9.1 | © 2007 - 2022 | </p>
            </Row>
        </Container>
        </Container>
    )

};

