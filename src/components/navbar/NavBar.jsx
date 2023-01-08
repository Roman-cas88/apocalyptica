// import { left } from '@popperjs/core';
import React, { useState } from 'react'

import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap/"
import { NavLink } from "react-router-dom";
import "./navBar.css"
// https://react-bootstrap.netlify.app/layout/breakpoints/
// Small sm ≥576px;  Medium  md ≥768px ; Large lg  ≥992px

export default function NavBar() {
  // Unstyling navbar buttons     let unsetStyle = { all: 'unset' };
  const navLinkStyle = 'p-2 ps-3 text-decoration-none text-secondary';
  const navLinkStyleMdNoneBg = 'p-2 ps-3 d-md-none text-light bg-secondary text-decoration-none';
  const navLinkStyleMdNone = 'd-md-none p-2 ps-3 text-decoration-none text-secondary';


  const [show, setShow] = useState();
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
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
            <Offcanvas.Title id="offcanvasNavbar-expand" >Close menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='p-0' onClick={handleClose}>
            <Nav className='me-auto ' >
              <NavLink className={navLinkStyleMdNoneBg} >Categories</NavLink>
              <NavLink  className={navLinkStyle} to="/">HOME</NavLink>
              <NavLink  className={navLinkStyle} to="/tickets">TICKETS</NavLink>
              <NavLink  className={navLinkStyle} to="/shirts">SHIRTS</NavLink>
              <NavLink  className={navLinkStyle} to="/girls">GIRLS</NavLink>
              <NavLink  className={navLinkStyle} to="/hoods">HOODS</NavLink>
              <NavLink  className={navLinkStyle} to="/music">MUSIC</NavLink>
              <NavLink className={navLinkStyle} to="/stuff">STUFF</NavLink>
              <NavLink className={navLinkStyle} href='https://en.helsinginkahvipaahtimo.fi/search/?q=apocalyptica' target="_blank">COFFEE</NavLink>              
              <NavLink className={navLinkStyleMdNoneBg} >Information</NavLink>
              <NavLink  className={navLinkStyleMdNone}   to="/">FAQ</NavLink>
              <NavLink  className={navLinkStyleMdNone} to="/">Rücksendung</NavLink>
              <hr className='d-md-none' />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>

    </Navbar>
  )
}
