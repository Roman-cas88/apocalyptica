import React, { useContext, useState } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { Busket } from '../contetnt/Busket/Busket';
import { StoreContext } from '../contetnt/StoreContext/StoreContext';

export default function HeaderNavIcons() {
const { counter, handleShow } = useContext(StoreContext)

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
      <Row xs={1}>
      <Col >
        <div className="pt-2 text-end">
          {  !isShown && (
          <Link onClick={handleClick} style={linkStyle} ><BsSearch size={22} /></Link>
          )}
          <Link to="/" style={linkStyle} ><BsPersonFill size={28} /></Link>
          <div style={{display:"inline-block", position:"relative", cursor:"pointer"}}>
            <Button style={{all: 'unset'}} onClick={handleShow}>
              <BsCartCheckFill size={28} />
              {counter !==0 && <div className="count">{counter}</div>}
            </Button>
            <Busket />
          </div>
        </div>
      </Col>
      <Col >
        {isShown && (
          <HeaderSearch />)}
      </Col>
      </Row>
    </Container>
    )
}