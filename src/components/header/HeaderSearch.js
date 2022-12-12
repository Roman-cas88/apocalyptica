import React from 'react';
import { BsSearch } from "react-icons/bs";
import { Form, InputGroup, Container } from "react-bootstrap/";

  export default function HeaderSearch() {
    return (
      <Container >
  <InputGroup className='justify-content-end'>
  <Form className="d-flex no-border" >
  <Form.Control
    type="search"
    placeholder="Search"
    // className="me-2"  
    backgroundColor="#efeff4"
    aria-label="Search"
    aria-describedby="search-sec"
   
  />
  <InputGroup.Text id="search-sec" style={{backgroundColor: 'transparent'}}><BsSearch size={22}/></InputGroup.Text>
</Form>
</InputGroup>
</Container>
    )
}