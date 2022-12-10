import React, { useState } from 'react'

import { Container, Navbar, Nav, Form, Col, Row } from "react-bootstrap/"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BsFillQuestionCircleFill, } from "react-icons/bs";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
// import {Form, Col } from 'react-bootstrap';
import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles

export default function HeaderTop() {
  let selectStyle = { backgroundColor: "black", color: "white" };

  const options = [
    { value: 'en', label: <div><img src={ukflag} width="20" alt="" />  en</div> },
    { value: 'de', label: <div><img src={deflag} width="20" alt="" />  de</div> },
  ]
  const [language, setLanguage] = useState(options[0].value);

  // const MyComponent = () => (
  //   <Select options={options} />
  // )
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    // show only from md    
    <Navbar className="d-none d-md-block p -0 mb-2 bg-dark text-white">
      <Container className="justify-content-end ">
        <Row >
          <Col>
            <Select 
              style={selectStyle} 
              variant="dark"
              defaultValue={options[0]}
              options={options} 
              // onChange={handleChange}
              // onChange={(e) => {
              //   setLanguage(e.target.value)
              // }}
              />
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="dark">
                <BsFillQuestionCircleFill className="mx-1" />Service/Help
              </Dropdown.Toggle>
              <Dropdown.Menu variant="secondary">
                <Dropdown.Item href="#">FAQ</Dropdown.Item>
                <Dropdown.Item href="#">Rücksendung</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

      </Container>
    </Navbar>

  );
}
