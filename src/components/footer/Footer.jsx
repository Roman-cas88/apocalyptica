import React, {useContext} from 'react'
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap/";
import shipping from './img/shipping.png';
import shipping2 from './img/shipping2.png';
import payment1 from './img/payment1.png';
import payment2 from './img/payment2.png';
import payment3 from './img/payment3.png';
import payment4 from './img/payment4.png';
import payment5 from './img/payment5.png';
import background from './img/landshaft.png';
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LocaleContext from "../../../src/LocaleContext";

export function Footer() {
    const { t } = useTranslation();
    //console.log("!!!:",i18next.languageChanged)
    const { locale } = useContext(LocaleContext);
    return (
        // <Container fluid variant='dark' className="text-light bg-dark">
        <Container fluid variant='dark' className="text-light " 
        style={{  
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background})`,            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // background-blend-mode: 'darken, luminosity'
            // background-blend-mode: 'darken'
          }}
        >
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
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-xs-1 w-100">{t("footer.information")}</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column text-white-50'>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.consumerarbitration")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.cookieSettings")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.imprint")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.privacy")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.termsConditions")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("footer.revocation")}</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>

                <Col md={2} className="px-md-0 ">
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-xs-1 w-100">{t("footer.shopservice")}</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column p-1'>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("nav.faq")}</Nav.Link>
                                        <Nav.Link href="#" className='text-white-50 p-1'>{t("nav.return")}</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container >
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>

                <Col md={2} className="px-md-0 ">
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 w-100">{t("footer.shipping")}</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column  p-1'>
                                    <Nav.Item >
                                        {/* <Nav.Link href="#"> */}
                                            <img src={shipping}  className='p-1' width="82" alt="" />
                                        {/* </Nav.Link> */}
                                        {/* {locale =="de" && <Nav.Link href="#"> */}
                                        {locale =="de" && <img src={shipping2} className='p-1' width="82" alt="" />}
                                        {/* </Nav.Link>} */}
                                    </Nav.Item>
                                    
                                    </Nav>
                                </Navbar.Collapse>
                            </div>
                        </Container>
                        <hr className='d-md-none my-0' />
                    </Navbar>
                </Col>
                <Col md={2} className="px-md-0 ">
                    <Navbar expand="md" className="flex-column align-items-stretch">
                        <Container >
                            <div className="w-100 d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 w-100">{t("footer.paiment")}</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="nav" className="border-0">
                                        <span className="text-white h1 fs-1">+</span>
                                    </Navbar.Toggle>
                                </div>
                                <Navbar.Collapse id="nav" className="me-auto">
                                    <Nav className='flex-column  p-1'>
                                        <Nav.Item >
                                            {locale =="en" && <img src={payment1} className='p-1' width="82" alt="" />}
                                            {locale =="de" && <img src={payment5} className='p-1' width="82" alt="" />}                                                                                                    
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
                <Col md={3} className="px-md-0 ">
                    <Navbar variant='light' expand="md" className='d-none d-md-block flex-column align-items-stretch'>
                    <Container >
                    <div className="w-100 d-flex flex-column">
                        <Navbar.Brand href="#" className="text-white h6 fs-6 p-1 ">{t("footer.contact")}</Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="nav" /> */}
                        <Nav className='flex-column text-white p-1'>
                            <Nav.Item>
                            {locale =="en" && <Nav.Link href="#" className='text-white  p-1 w-100'> +49(0)815-123 1234 12</Nav.Link>}
                                <Nav.Link href="mailto:support@merchcowboy.com" className='text-white  p-1'>support@merchcowboy.com </Nav.Link>
                            </Nav.Item>
                            <Nav >
                                <Nav.Link href=""><FiFacebook size={22} style={{ color: "white" }} /></Nav.Link>
                                <Nav.Link href=""><BsInstagram size={22} style={{ color: "white" }} /></Nav.Link>
                                <Nav.Link href=""><BsYoutube size={22} style={{ color: "white" }} /></Nav.Link>
                            </Nav>
                        </Nav>
                    </div>
                    </Container>
                    
                    </Navbar>
                </Col>

            </Row>
            <Row className="text-center text-white-50 my-5"  >
                <p>{t("footer.comment")}</p>
            </Row>
            <Row className=" text-center text-white-50 my-5">
                <p>Theme version: 2022.9.1 | © 2007 - 2022 | </p>
            </Row>
        </Container>
        </Container>
    )

};

// background-blend-mode: overlay
// <img src="..." class="img-fluid" alt="...">
// https://images..com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350