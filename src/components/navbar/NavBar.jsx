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
  <Navbar variant='light' expand="md">   
      <Container>
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand"
              aria-labelledby="offcanvasNavbar-expand"
              placement="start"
              variant='light' className="fs-6 bg-light"
            >
              <Offcanvas.Header closeButton className="text-white bg-dark">
                <Offcanvas.Title id="offcanvasNavbar-expand" >Close menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='p-0'>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav className='me-auto'>
          <Nav.Link variant='light' className='d-md-none text-light bg-secondary px-3'>Categories</Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/" className='px-3'>HOME</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/tickets" className='px-3'>TICKETS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/shirts" className='px-3'>SHIRTS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/girls" className='px-3'>GIRLS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/hoods" className='px-3'>HOODS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/music" className='px-3'>MUSIC</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/stuff" className='px-3'>STUFF</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/coffee" className='px-3'>COFFEE</Link></Nav.Link>

          <Nav.Link variant='light' className='d-md-none text-light  bg-secondary px-3'>Information</Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/" className='d-md-none px-3'>FAQ</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/" className='d-md-none px-3'>Rücksendung</Link></Nav.Link>
          <hr className='d-md-none' />
        </Nav>        
        {/* </Navbar.Collapse> */}
        </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>

    </Navbar>
  )
}
