import React, { useState } from 'react';
import { Container, Navbar, Nav, Form, Col, Row } from "react-bootstrap/";
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from "react-router-dom"; 
import NavDropdown from 'react-bootstrap/NavDropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import { BsFillQuestionCircleFill, } from "react-icons/bs";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles

export default function HeaderTop() {
  let selectStyle = { backgroundColor: "black", color: "white" };
  let unsetStyle = {all: 'unset'};
  const options = [
    { value: 'en', label: <div><img src={ukflag} width="20" alt="" />  en</div> },
    { value: 'de', label: <div><img src={deflag} width="20" alt="" />  de</div> },
  ]
  const [language, setLanguage] = useState(options[0].value);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    // show only from md :  d-none d-md-block //  bg-dark text-white  mb-2
    <Navbar className="p-0  ">
      <Container className="justify-content-end ">
        <Row >
          <Col>
            <Select 
              // variant="dark" 
              // style={selectStyle}               
              defaultValue={options[0]}
              options={options} 

              // styles={{
              //   control: (baseStyles, state) => ({
              //     ...baseStyles,
              //     borderColor: state.isFocused ? 'grey' : 'red',
              //   }),
              // }}

               theme={(theme) => ({
                ...theme,
                 colors: {
                  ...theme.colors,
                  text: 'orangered',
                  primary25: 'white',
                  primary: 'lightgrey',
                },
                // background: isFocused
                // ? 'hsla(291, 64%, 42%, 0.5)'
                // : isSelected
                //     ? 'hsla(291, 64%, 42%, 1)'
                //     : undefined,
              })}

              // onChange={handleChange}
              // onChange={(e) => {
              //   setLanguage(e.target.value)
              // }}
              />
          </Col>


          <Col >
          <Form.Select size="sm" as={NavItem}>
            {/* <option>Open this select menu</option> */}
            <option value="en">
            <img src={ukflag} width="20" alt="" />  en
            </option>
            <option value="de">
             
               en
              </option>
            
          </Form.Select>
          {/*  style="background-image:url({ukflag});"  */}
      </Col>

          <Col>
            <Dropdown  as={NavItem}>
              <Dropdown.Toggle  as={NavLink} >        {/* variant="dark" */}
                <BsFillQuestionCircleFill className="mx-1" />Service/Help              
              </Dropdown.Toggle>
              <Dropdown.Menu >    
                <Dropdown.Item >
                <Link to="/"  style={unsetStyle}>FAQ</Link>
                  </Dropdown.Item>
                <Dropdown.Item href="#">
                <Link to="/"  style={unsetStyle}>Rücksendung</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

      </Container>
    </Navbar>

  );
}
