import React, { useState, useRef } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import {Button, Container, Row, Col, Navbar, Nav, Overlay, Popover, Offcanvas } from "react-bootstrap/";
import { Link, NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { Busket } from '../contetnt/Busket/Busket';

export default function HeaderNavIcons() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

            <div style={{ display: "inline-block", position: "relative", cursor: "pointer" }}>
              {/* <Link to="/" style={linkStyle} > */}
              <Button style={{ all: 'unset' }} onClick={handleShow}>
                <BsCartCheckFill size={28} />
                <div className="count">1</div>
              </Button>
              <Busket propsHandleClose={handleClose} show={show} />
            </div>
            {isShownMyAccount && (<PopoverMyAccount show={isShownMyAccount} target={target} />)}
          </div>
        </Col>
        <Col >
          {isShown && (<HeaderSearch />)}
        </Col>
      </Row>
    </Container>
  );
}

const PopoverMyAccount = (props) => {
  const ref = useRef(null);
  const [show, setShow] = useState(props.show);
  return (
    <div ref={ref} >
      <Overlay
        show={show}
        target={props.target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained" >
          <Popover.Header as="h3">My Account</Popover.Header>
          <Popover.Body className='p-0 ' onClick={() => setShow(false)}>
            <NavMyAccount />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  )
}

const NavMyAccount = () => {
  let unsetStyle = { all: 'unset', color: 'dark' }
  const navLinkStyle = 'p-2 text-decoration-none w-100 mx-auto text-dark';
  return (
    <>
      <Nav className="flex-column bg-light px-2">
        <NavLink className='p-2 w-100 mx-auto bg-secondary text-white text-decoration-none' to="/account" >Sign in</NavLink>
        <NavLink className={navLinkStyle} to="/account" >or register</NavLink>
        <hr />
        <NavLink className={navLinkStyle} to="/account" >Overview</NavLink>
        <NavLink className={navLinkStyle} to="/account" >Profile</NavLink>
        <NavLink className={navLinkStyle} to="/account" >Addresses</NavLink>
        <NavLink className={navLinkStyle} to="/account" >Payment methods</NavLink>
        <NavLink className={navLinkStyle} to="/account" >Order</NavLink>
        <NavLink className={navLinkStyle} to="/account" >Instant downloads</NavLink>
        <NavLink className={navLinkStyle} to="/wishlist" >Wish list</NavLink>


        {/* <Nav.Link className='w-100 mx-auto bg-secondary text-white'><Link style={unsetStyle} to="/account" >Sign in</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >or register</Link></Nav.Link>
        <hr />
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Overview</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Profile</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Addresses</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Payment methods</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Order</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Instant downloads</Link></Nav.Link>
        <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/wishlist" >Wish list</Link></Nav.Link> */}
      </Nav>
    </>
  )
};

