//import './App.css';
// npm install react-grid-system --save
import { Container, Row, Col } from "react-grid-system";
import { Visible, Hidden } from "react-grid-system";

import { Content } from './components/contetnt/Content';
import NavBar from './components/navbar/NavBar';
import HeaderTop from './components/header/HeaderTop';
import HeaderLogo from './components/header/HeaderLogo';
import HeaderNavIcons from './components/header/HeaderNavIcons';
import {Footer} from './components/footer/Footer';
import { StoreContext } from "./components/contetnt/StoreContext/StoreContext";
import { useState } from "react";


export default function App() {
// Creating global Storage using useContext 
  const [item, setItem] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [itemAdded, setItemAdded] = useState(false)

  const addToBusket = (i) => setItem([...item, i])
  const handleClose = () => {
    setShow(false)
    setItemAdded(false)
  }
  const handleShow = () => setShow(true);
  const countItem = () => setCounter(item.length+1)
  const clearBusket = () => {
    setCounter(0)
    setItem([])
  }
  const deleteItem = (id) => {
    setItem(item.filter((element) => element.id !== id))
    setCounter(counter - 1)
  }

  const store = {
    item,
    addToBusket,
    counter,
    countItem,
    show,
    handleClose,
    handleShow,
    clearBusket,
    deleteItem,
    itemAdded,
    setItemAdded
  }
  const styleContent = {background: '#f5f5f5'};
  return (
    <StoreContext.Provider value={store}>
    <Container fluid >
      <Container className='px-0 my-0 pb-3' >
      <Row align="center">
        <Col >
          <Hidden xs sm>
          <HeaderTop />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between" >
        <Col sx={12} md={8}>
        <HeaderLogo />
        </Col>
        <Col >
          <Hidden xs sm>
          <HeaderNavIcons />
          </Hidden>
        </Col>
      </Row>

      <Row justify="between">      
        <Col md={12} xs="content" >         
          <NavBar />
        </Col>
        <Col >
        <Visible sm xs>
          <HeaderNavIcons />
        </Visible>
        </Col>
      </Row>
      </Container> 
      <hr className='m-0 p-0' style={{color: '#e1e1e1'}}/>
      <Row justify="center" className='pb-5' style={styleContent}>
        <Col className="px-0">
        <Content />
        </Col>
      </Row>
      <Row>
      <Footer />
      </Row>

    </Container>
    </StoreContext.Provider>
  );
}
