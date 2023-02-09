import { Container, Row, Col } from "react-bootstrap";
import { Content } from './components/contetnt/Content';
import {Header} from './components/header/Header'
import {Footer} from './components/footer/Footer';
import { StoreContext } from "./components/contetnt/StoreContext/StoreContext";
import { useState } from "react";
import { Cookie } from "./components/cookie/Cookie";
import i18n from './i18n';
import React, { Suspense } from 'react';
import LocaleContext from "./LocaleContext";

export default function App() {
// Creating global Storage using useContext 
  const [item, setItem] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const [amount, setAmount] = useState(1)
  const [size, setSize] = useState("S")

  const addToBasket = (i) => setItem([...item, i])
  const handleClose = () => {
    setShow(false)
    setItemAdded(false)
  }
  const handleShow = () => setShow(true);
  const countItem = () => setCounter(item.length+1)
  const clearBasket = () => {
    setCounter(0)
    setItem([])
  }
  const deleteItem = (id) => {
    setItem(item.filter((element) => element.id !== id))
    setCounter(counter - 1)
  }

  const store = {
    item,
    addToBasket,
    counter,
    countItem,
    show,
    handleClose,
    handleShow,
    clearBasket,
    deleteItem,
    setItemAdded,
    itemAdded,
    amount,
    setAmount,
    size,
    setSize,
  }
  const styleContent = {background: '#f5f5f5'};

  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
    <Suspense fallback="loading">
    <StoreContext.Provider value={store}>
      <Header /> 
      <hr/>
    <Container fluid>
      <hr className='m-0 p-0' style={{color: '#e1e1e1'}}/>
      <Row justify="center" className='pb-5' style={styleContent}>
        <Col className="px-0">
        <Content />
        </Col>
      </Row>
      <Cookie />
    </Container>
      <Footer />
    </StoreContext.Provider>
    </Suspense>
    </LocaleContext.Provider>

  );
}
