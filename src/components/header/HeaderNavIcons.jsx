import React, { useContext, useState } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Button, Container, Row, Col, Nav, Overlay, Popover } from "react-bootstrap/";
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { Busket } from '../contetnt/Busket/Busket';
import { StoreContext } from '../contetnt/StoreContext/StoreContext';
import { UserContext } from "../contetnt/Account/UserContext";
import { PopoverMyAccount } from './PopoverMyAccount'

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

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
  const [isShownMyAccount, setIsShownMyAccount] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClickMyAccount = event => {
    setIsShownMyAccount(current => !current)
    setTarget(event.target);
  }

  const {nameAccount} = useContext(UserContext);

  return (
    <Container>
      <Row xs={1}>
        <Col >
          <div className="pt-2 text-end">
            {!isShown && (
              <Link onClick={handleClick} style={linkStyle} ><BsSearch size={22} /></Link>
            )}
            {nameAccount && (
              <Link onClick={handleClickMyAccount} style={linkStyle} >{nameAccount}</Link>
            )}
            {!nameAccount && (
              <Link onClick={handleClickMyAccount} style={linkStyle} ><BsPersonFill size={28} /></Link>
            )}
            <div style={{ display: "inline-block", position: "relative", cursor: "pointer" }}>
              <Button style={{ all: 'unset' }} onClick={handleShow}>
                <BsCartCheckFill size={28} />
                {counter !== 0 && <div className="count">{counter}</div>}
              </Button>
              <Busket />
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
