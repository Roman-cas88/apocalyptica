import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap/"
import { Link } from "react-router-dom"; 
  // https://react-bootstrap.netlify.app/layout/breakpoints/
  // Small sm ≥576px;  Medium  md ≥768px ; Large lg  ≥992px

export default function NavBar() {
  
  // Unstyling navbar buttons
  let unsetStyle = {all: 'unset'}

  return (
  <Navbar variant='light' expand="md">   
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='me-auto'>
          <Nav.Link><Link style={unsetStyle} to="/">HOME</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/tickets">TICKETS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/shirts">SHIRTS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/girls">GIRLS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/hoods">HOODS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/music">MUSIC</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/stuff">STUFF</Link></Nav.Link>
          <Nav.Link href='https://en.helsinginkahvipaahtimo.fi/search/?q=apocalyptica' target="_blank">COFFEE</Nav.Link>
        </Nav>        
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}
