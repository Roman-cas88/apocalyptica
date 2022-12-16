import React from 'react'
import { Container, Row, Col, Navbar, Nav, Dropdown } from "react-bootstrap/";
import shipping from './img/shipping.jpg';
import payment4 from './img/payment4.png';

export default function NavBar() {
    return (
        <Container fluid variant='dark' className=" text-light bg-dark my-5">
            <Row>
                <Col md={3} className="bg-success">
                <Navbar variant='light' expand="md">  
                {/* <Container> */}
                {/* <div className='flex-box me-auto'> */}
                 <Navbar.Brand href="#" className="text-white">INFORMATION</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                 {/* </div> */}
                    <Navbar.Collapse id="nav">
                        <Nav className='flex-column me-auto'>
                             <Nav.Link href="#">Consumer arbitration</Nav.Link>
                             <Nav.Link href="#">Cookie-Settings</Nav.Link>
                             <Nav.Link href="#">Imprint</Nav.Link>
                             <Nav.Link href="#">Privacy</Nav.Link>
                             <Nav.Link href="#">Terms and Conditions</Nav.Link>
                             <Nav.Link href="#">Revocation</Nav.Link>                              
                        </Nav>        
                    </Navbar.Collapse>
                    {/* </Container>  */}
                </Navbar>             
                </Col>                
                <Col md={2} className="bg-primary">
                <Navbar variant='light' expand="md" className='flex-column '>   
                 <Navbar.Brand href="#" className="text-white">SHOP SERVICE</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                <Navbar.Collapse id="nav">
                        <Nav className='flex-column '>
                             <Nav.Link href="#">FAQ</Nav.Link>
                             <Nav.Link href="#">Return Policy</Nav.Link>                           
                        </Nav>        
                </Navbar.Collapse>

                </Navbar>   
                
                </Col>
                <Col md={2}>
                <Navbar variant='light' expand="md" className='flex-column '>   
                 <Navbar.Brand href="#" className="text-white">SHIPPING</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                    <Navbar.Collapse id="nav">
                        <Nav className='flex-column '>
                             <Nav.Item>                            
                                <img src={shipping} width="82" alt="" />
                             </Nav.Item> 
                                                        
                        </Nav>        
                    </Navbar.Collapse>

                </Navbar>
                </Col>                
                <Col md={2}>
                <h6>PAIMENT</h6>
                </Col>
                <Col md={3}>
                <h6>CONTACT</h6>
                </Col>

            </Row>
            <Row className="text-center text-white-50 my-5">
                <p>* All prices incl. value added tax plus. shipping costs and possibly cash on delivery fee, if not otherwise stated</p>
            </Row>
            <Row className="text-center text-white-50 my-5">
                <p>Theme version: 2022.9.1 | © 2007 - 2022 | POWERED BY:</p>
            </Row>
        </Container>
    )

}