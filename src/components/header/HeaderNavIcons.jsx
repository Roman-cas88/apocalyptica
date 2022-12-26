import React, { useState } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

// Change by Roman from here
import { Busket } from '../contetnt/Busket/Busket';



export default function HeaderNavIcons() {

        {/* Change by Roman from here*/}

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

        {/* To here */}


  const linkStyle = {
    margin: ".5rem",
    color: 'black',
  }
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current)
  }
  return (
    // size: https://www.folkstalk.com/tech/react-icon-size-with-code-examples/
    <Container>

      <div className="pt-2 text-end">
        <Link onClick={handleClick} style={linkStyle} ><BsSearch size={22} /></Link>
        <Link to="/" style={linkStyle} ><BsPersonFill size={28} /></Link>

        {/* Change by Roman from here*/}

        <div style={{display:"inline-block", position:"relative", cursor:"pointer"}}>
          {/* <Link to="/" style={linkStyle} > */}
          <Button style={{all: 'unset'}} onClick={handleShow}>
            <BsCartCheckFill size={28} />
            <div className="count">1</div>
            </Button>
          <Busket propsHandleClose={handleClose} show={show}/>
        {/* </Link> */}
        </div>

        {/* To here */}

      </div>
      <div className="text-end">
        {isShown && (
          <HeaderSearch />)}
      </div>
    </Container>

  )
}

