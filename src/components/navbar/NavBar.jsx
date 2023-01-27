// import { left } from '@popperjs/core';
import React, { useState } from 'react'

import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap/"
import { NavLink } from "react-router-dom";
import "./navBar.css"
import { useTranslation } from "react-i18next"; 
import { HeaderLanguage } from "../header/HeaderLanguage";

export default function NavBar() {
  // Unstyling navbar buttons     let unsetStyle = { all: 'unset' };
  const navLinkStyle = 'p-2 ps-3 text-decoration-none text-secondary';
  const navLinkStyleMdNoneBg = 'p-2 ps-3 d-md-none text-light bg-secondary text-decoration-none';
  const navLinkStyleMdNone = 'd-md-none p-2 ps-3 text-decoration-none text-secondary';

  const [show, setShow] = useState();
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const { t } = useTranslation();

  return (
    <Navbar variant='light' expand="md" >
      <Container >
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand" onClick={handleShow}/>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand"
          aria-labelledby="offcanvasNavbar-expand"
          placement="start"
          variant='light' className="fs-6 bg-light w-20 "
          restoreFocus={false}
          show={show}       
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton className="text-white bg-dark">
            <Offcanvas.Title id="offcanvasNavbar-expand" >{t("nav.closemenu")}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='p-0' 
          // onClick={handleClose}
          >
            <Nav className='me-auto ' >
              <NavLink className='d-md-none'><HeaderLanguage /></NavLink>
              <NavLink className={navLinkStyleMdNoneBg} >{t("nav.categories")}</NavLink>
              <NavLink  className={navLinkStyle} to="/" onClick={handleClose} >{t("nav.home")}</NavLink>
              <NavLink  className={navLinkStyle} to="/tickets" onClick={handleClose} >{t("nav.tickets")}</NavLink>
              <NavLink  className={navLinkStyle} to="/shirts" onClick={handleClose} >{t("nav.shirts")}</NavLink>
              <NavLink  className={navLinkStyle} to="/girls" onClick={handleClose} >{t("nav.girls")}</NavLink>
              <NavLink  className={navLinkStyle} to="/hoods" onClick={handleClose} >{t("nav.hoods")}</NavLink>
              <NavLink  className={navLinkStyle} to="/music" onClick={handleClose} >{t("nav.music")}</NavLink>
              <NavLink className={navLinkStyle} to="/stuff" onClick={handleClose} >{t("nav.stuff")}</NavLink>
              <NavLink className={navLinkStyle} href='https://en.helsinginkahvipaahtimo.fi/search/?q=apocalyptica' target="_blank">COFFEE</NavLink>              
              <NavLink className={navLinkStyleMdNoneBg} >{t("nav.information")}</NavLink>
              <NavLink  className={navLinkStyleMdNone} to="/" onClick={handleClose} >{t("nav.faq")}</NavLink>
              <NavLink  className={navLinkStyleMdNone} to="/" onClick={handleClose} >{t("nav.return")}</NavLink>
              <hr className='d-md-none' />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

    </Navbar>
  )
}
