import React, { useState, useRef } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Form, Button, Container, Row, Col, Navbar, Nav, Overlay, Popover, Offcanvas } from "react-bootstrap/";
import { Link, NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

export default function HeaderNavIcons() {
  const linkStyle = {
    margin: ".5rem",
    color: 'black',
  }
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current)
  }
  const [isShownMyAccount, setIsShownMyAccount] = useState(false);
  const [target, setTarget] = useState(null);
  const handleClickMyAccount = event => {
    setIsShownMyAccount(current => !current)
    setTarget(event.target);
  }

  return (
    // size: https://www.folkstalk.com/tech/react-icon-size-with-code-examples/
    <Container>
      <Row xs={1}>
        <Col >
          <div className="pt-2 text-end">
            {!isShown && (
              <Link onClick={handleClick} style={linkStyle} ><BsSearch size={22} /></Link>
            )}
            <Link onClick={handleClickMyAccount} style={linkStyle} ><BsPersonFill size={28} /></Link>
            <Link to="/" style={linkStyle} ><BsCartCheckFill size={28} /></Link>
            {isShownMyAccount && (<PopoverMyAccount show={isShownMyAccount} target={target} />)}
          </div>
        </Col>
        <Col >
          {isShown && (<HeaderSearch />)}
        </Col>
      </Row>
    </Container>
  )
}

const PopoverMyAccount = (props) => {
  const ref = useRef(null);
  const [show, setShow] = useState(props.show);
  return (
    <div ref={ref} md>
      <Overlay
        show={show}
        target={props.target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" >
          <Popover.Header as="h3">My Account</Popover.Header>
          <Popover.Body className='p-0 'onClick={() => setShow(false)}>
            <NavMyAccount />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  )
}


const NavMyAccount = () => {
  let unsetStyle = {all: 'unset', color: 'dark'}
  return (
    <>
      <Nav className="flex-column bg-light px-2">
      <Nav.Link className='w-100 mx-auto bg-secondary text-white'><Link style={unsetStyle} to="/account" >Sign in</Link></Nav.Link>
      <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >or register</Link></Nav.Link>
        <hr />
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Overview</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Profile</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Addresses</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Payment methods</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Order</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Instant downloads</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/" >Wish list</Link></Nav.Link>
      </Nav>
    </>
  )
};