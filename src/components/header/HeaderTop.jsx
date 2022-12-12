import React, { useState } from 'react';
import { Container, Navbar, Col, Row, Dropdown, NavItem, NavLink} from "react-bootstrap/";
import { Link } from "react-router-dom"; 


import { BsFillQuestionCircleFill, } from "react-icons/bs";
import ukflag from './img/uk.png'
import deflag from './img/de.png'
import Select from 'react-select';     //  npm i --save react-select   https://react-select.com/home#custom-styles

export default function HeaderTop() {

  let unsetStyle = {all: 'unset'};
  const options = [
    { value: 'en', label: <div><img src={ukflag} width="20" alt="" />  en</div> },
    { value: 'de', label: <div><img src={deflag} width="20" alt="" />  de</div> },
  ]
  const [language, setLanguage] = useState(options[0].value);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const selectStyle = { 
    control: (base) => ({
      ...base,
      padding: 0,
      border: '0',
      boxShadow: 'none',
      height: '10px',
    }),
    indicatorSeparator: (base) => ({
      ...base,
       display: 'none',
       height: '10px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingTop: '0',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#757575',
      padding: 0,
      height: '40px',
     //
    }),
    clearIndicator: (base) => ({
      ...base,
     }),
    container: (base) => ({
      ...base,
    }),
    input: (base) => ({
      ...base,
      height: '10px',
    }),
    singleValue: (provided) => ({
      ...provided,
      height: '40px',   // 
      paddingTop: '0',
    }),

    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? '#e9ecef' : 'white',
        color: 'black',
        };
    },


  };
  return (
    <Navbar className="p-0  ">
      <Container className="justify-content-end ">
        <Row >
          <Col>
            <Select 
            // onChange={event => handleChange(event.target.value)}
              styles={selectStyle}               
              defaultValue={options[0]}
              options={options} 
              />
          </Col>
          <Col>
            <Dropdown  as={NavItem}>
              <Dropdown.Toggle  as={NavLink} >        
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
