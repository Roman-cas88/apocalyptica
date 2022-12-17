import React from 'react'
import { Container, Row, Col, Navbar, Nav, Dropdown } from "react-bootstrap/";
import shipping from './img/shipping.png';
import payment1 from './img/payment1.png';
import payment2 from './img/payment2.png';
import payment3 from './img/payment3.png';
import payment4 from './img/payment4.png';
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
export default function NavBar() {
    return (
        <Container fluid variant='dark' className="text-light bg-dark my-5">
            <Row>
            <Nav className='d-md-none justify-content-around '>
                            <Nav.Link href=""><FiFacebook size={22} style={{color:"white"}}/></Nav.Link>
                            <Nav.Link href=""><BsInstagram size={22} style={{color:"white"}}/></Nav.Link>
                            <Nav.Link href=""><BsYoutube size={22} style={{color:"white"}}/></Nav.Link>
            </Nav>
            </Row>
            <Row>

                <Col md={3} >
                <Navbar expand="md">  
                <Container className='flex-column '>
                <div >                 
                 <Navbar.Brand href="#" className="text-white h6 fs-6 p-1">INFORMATION</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav"/>
                </div>

                 <Navbar.Collapse id="nav">
                        <Nav className='flex-column text-white-50'>
                             <Nav.Link href="#" className='text-white-50 p-1'>Consumer arbitration</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Cookie-Settings</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Imprint</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Privacy</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Terms and Conditions</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Revocation</Nav.Link>                              
                        </Nav>        
                 </Navbar.Collapse>
                 </Container>
                </Navbar>             
                </Col>  

                <Col md={2} className="">
                <Navbar expand="md" >   
                <Container className='flex-column '>
                <div > 
                 <Navbar.Brand href="#" className="text-white h6 fs-6  p-1">SHOP SERVICE</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                </div>
                <Navbar.Collapse id="nav">
                        <Nav className='flex-column p-1'>
                             <Nav.Link href="#" className='text-white-50 p-1'>FAQ</Nav.Link>
                             <Nav.Link href="#" className='text-white-50 p-1'>Return Policy</Nav.Link>                           
                        </Nav>        
                </Navbar.Collapse>           

                </Container >
                </Navbar>                 
                </Col>
                <Col md={2}>
                <Navbar expand="md" > 
                <Container className='flex-column '>
                <div >   
                 <Navbar.Brand href="#" className="text-white h6 fs-6 p-1">SHIPPING</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                </div>
                    <Navbar.Collapse id="nav">
                        <Nav >
                        <Nav.Link href="#">
                                <img src={shipping} className='p-1' width="82" alt="" />
                        </Nav.Link>                        
                        </Nav>        
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Col>    

                <Col md={2}>
                <Navbar expand="md" >   
                <Container className='flex-column '>
                <div>
                 <Navbar.Brand href="#" className="text-white h6 fs-6 p-1">PAIMENT</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                 </div>
                    <Navbar.Collapse id="nav">
                        <Nav className='flex-column  p-1'>
                             <Nav.Item >                            
                                <img src={payment1} className='p-1' width="82" alt="" />
                                <img src={payment2} className='p-1' width="82" alt="" />
                                <img src={payment3} className='p-1'width="82" alt="" />
                                <img src={payment4} className='p-1' width="82" alt="" />
                             </Nav.Item>                                                         
                        </Nav>        
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Col>
                <Col md={3}>
                <Navbar variant='light' expand="md" className='d-none d-md-block flex-column '>   
                 <Navbar.Brand href="#" className="text-white h6 fs-6 p-1">CONTACT</Navbar.Brand>
                 <Navbar.Toggle aria-controls="nav" />
                        <Nav className='flex-column text-white'>
                        <Nav.Item classname="">
                             <Nav.Link href="#" className='text-white  p-1'> +49(0)815-123 1234 12</Nav.Link>
                             <Nav.Link href="mailto:support@merchcowboy.com" className='text-white  p-1'>support@merchcowboy.com </Nav.Link>                           
                        </Nav.Item>
                        <Nav className='justify-content-around'>
                            <Nav.Link href=""><FiFacebook size={22} style={{color:"white"}} /></Nav.Link>
                            <Nav.Link href=""><BsInstagram size={22} style={{color:"white"}}/></Nav.Link>
                            <Nav.Link href=""><BsYoutube size={22} style={{color:"white"}}/></Nav.Link>
                        </Nav>
                        </Nav>        
                </Navbar> 
                {/* d-none d-sm-block d-md-none */}
                </Col>

            </Row>
            <Row className="text-center text-white-50 my-5"  >
                <p>* All prices incl. value added tax plus. shipping costs and possibly cash on delivery fee, if not otherwise stated</p>
            </Row>
            <Row className=" text-center text-white-50 my-5">
                <p>Theme version: 2022.9.1 | © 2007 - 2022 | POWERED BY:</p>
            </Row>
        </Container>
    )

};

