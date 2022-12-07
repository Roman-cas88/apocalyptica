import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap/"
import { Link } from "react-router-dom"

export default function NavBar() {
  
  // Unstyling navbar buttons
  let unsetStyle = {all: 'unset'}

  return (
    <Navbar variant='light'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link><Link style={unsetStyle} to="/">HOME</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/tickets">TICKETS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/shirts">SHIRTS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/girls">GIRLS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/hoods">HOODS</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/music">MUSIC</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/stuff">STUFF</Link></Nav.Link>
          <Nav.Link><Link style={unsetStyle} to="/coffee">COFFEE</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
