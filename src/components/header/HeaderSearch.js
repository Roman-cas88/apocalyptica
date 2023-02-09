import React, { useRef, useState, useContext} from 'react'; 
// import { BsSearch } from "react-icons/bs";
import { Form, InputGroup, Container } from "react-bootstrap/";
import { PopoverSearchList } from "./PopoverSearchList";
import {isShownSearchContext} from "./HeaderNavIcons"

  export default function HeaderSearch() {
    const {isShownSearch} = useContext(isShownSearchContext)
    const [target, setTarget] = useState(null);
    const [seachInput, setSeachInput] = useState('');
    // const [isShownSearchRes, setisShownSearchRes] = useState(false);

    const searchRef = useRef();

    function handleChange(e) {
      setSeachInput(e.target.value);
     setTarget(e.target);
    }
    // const handleClick = e => {
    //   setisShownSearchRes(current => !current)
    //   setTarget(e.target);
    // }

    return (
   
      <Container >      
        <InputGroup  className="w-100 justify-content-end">
        <Form className="d-flex no-border" >
        {isShownSearch &&       
        <Form.Control
          type="search"
          placeholder="Search"
          backgroundcolor="#efeff4"
          aria-label="Search"
          aria-describedby="search-sec"
          onChange={handleChange}
          autoFocus
          ref={searchRef}
          //onBlur={() => {setIsShownSearch(false); }}  // hide out of focus            
          />
         }
        </Form>
        {/* <InputGroup.Text onClick={handleClick} id="search-sec" style={{ backgroundcolor: 'transparent'}}><BsSearch size={22}/></InputGroup.Text> */}
        </InputGroup>
        <PopoverSearchList target={target} seachInput={seachInput} />     
      </Container>    
    
    )
}
