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

  const addToBusket = (i) => setItem([...item, i])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const countItem = () => setCounter(counter + 1)
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
  }
  const styleContent = {background: '#f5f5f5'};
  return (
    <StoreContext.Provider value={store}>
    <Container fluid className="px-0">
    <Container className='my-0 pb-3'>
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
      {/* <hr className='my-0 pb-3'/> */}

      {/* <Visible lg xl xxl>
      <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/b8/c2/10/Unbenannt-2.jpg' style={{width: '100%', height:'22vw', maxheight:'350px'}}/>
      shirts
      <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/ac/1c/a0/Unbenannt-4.jpg' style={{width: '100%', height:'22vw', maxheight:'350px'}}/>
      girls
      <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/92/b5/c4/Unbenannt-5.jpg' style={{width: '100%', height:'22vw', maxheight:'350px'}}/>
      hoods
    <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/7d/51/61/Unbenannt-6.jpg' style={{width: '100%', height:'22vw', maxheight:'350px'}}/>
      </Visible> */}

      <Container fluid className="py-md-3 px-0 mx-auto" style={styleContent}  >
      {/* <Container className="px-0  mx-auto bg-inherit"> */}
      <Row>
        <Content />
      </Row>
      {/* </Container> */}
      </Container>

      <Row>
      <Footer />
      </Row>

    </Container>
    </StoreContext.Provider>
  );
}