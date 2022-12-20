import { left } from '@popperjs/core';
import React from 'react'
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap/"
import { Link } from "react-router-dom"; 
import "./navBar.css"
  // https://react-bootstrap.netlify.app/layout/breakpoints/
  // Small sm ≥576px;  Medium  md ≥768px ; Large lg  ≥992px

export default function NavBar() {
  // Unstyling navbar buttons
  let unsetStyle = {all: 'unset'}

  return (
  <Navbar variant='light' expand="md" >   
      <Container >
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand"
              aria-labelledby="offcanvasNavbar-expand"
              placement="start"
              variant='light' className="fs-6 bg-light "              
            >
              <Offcanvas.Header closeButton className="text-white bg-dark">
                <Offcanvas.Title id="offcanvasNavbar-expand" >Close menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className='me-auto '>
          <Nav.Link variant='light' className='d-md-none text-light bg-secondary ps-3'>Categories</Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/" >HOME</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/tickets" className=''>TICKETS</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/shirts" className=''>SHIRTS</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/girls" className=''>GIRLS</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/hoods" className=''>HOODS</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/music" className=''>MUSIC</Link></Nav.Link>
          <Nav.Link className='ps-3'><Link style={unsetStyle} to="/stuff" className=''>STUFF</Link></Nav.Link>
          <Nav.Link className='ps-3' href='https://en.helsinginkahvipaahtimo.fi/search/?q=apocalyptica' target="_blank">COFFEE</Nav.Link>
          <Nav.Link className='ps-3 d-md-none text-light bg-secondary' variant='light' >Information</Nav.Link>

          <Nav.Link className='d-md-none ps-3'><Link style={unsetStyle} to="/" >FAQ</Link></Nav.Link>
          <Nav.Link className='d-md-none ps-3'><Link style={unsetStyle} to="/" >Rücksendung</Link></Nav.Link>

          <hr className='d-md-none' />
        </Nav>        
        {/* </Navbar.Collapse> */}
        </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>

    </Navbar>
  )
}
