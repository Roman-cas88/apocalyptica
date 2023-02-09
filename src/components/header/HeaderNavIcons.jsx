import React, { useContext, useState } from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Button, Container, Row, Col } from "react-bootstrap/";
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { Basket } from '../contetnt/Basket/Basket';
import { StoreContext } from '../contetnt/StoreContext/StoreContext';
import { UserContext } from "../contetnt/Account/UserContext";
import { PopoverMyAccount } from './PopoverMyAccount';
import { createContext } from "react";

export const isShownSearchContext = createContext();

export default function HeaderNavIcons() {
  const { counter, handleShow } = useContext(StoreContext)
  const linkStyle = {
    margin: ".5rem",
    color: 'black',
  }
  const [isShownSearch, setIsShownSearch] = useState(false);
  const handleClick = () => {
    setIsShownSearch(current => !current)
  }
  const [isShownMyAccount, setIsShownMyAccount] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClickMyAccount = event => {
    setIsShownMyAccount(current => !current)
    setTarget(event.target);
  }

  const {nameAccount} = useContext(UserContext);

  return (
    <isShownSearchContext.Provider value={{isShownSearch, setIsShownSearch}}>
    <Container>
      <Row xs={1}>
        <Col >
          <div className="pt-2 text-end">
            {!isShownSearch && (
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
              <Basket />
            </div>
            {isShownMyAccount && (<PopoverMyAccount show={isShownMyAccount} target={target} />)}
          </div>
        </Col>
        <Col >
          {isShownSearch && (<HeaderSearch  />)}   
        </Col>

      </Row>
    </Container>
    </isShownSearchContext.Provider>
  );
}


//setIsShown={setIsShown} isShown={isShown}
