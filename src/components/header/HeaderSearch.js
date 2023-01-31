import React, {useState} from 'react';
import { BsSearch } from "react-icons/bs";
import { Form, InputGroup, Container } from "react-bootstrap/";
import { PopoverSearchList } from "./PopoverSearchList";

  export default function HeaderSearch() {
    const [target, setTarget] = useState(null);
    const [isShownSearchRes, setisShownSearchRes] =useState(false);
    const [seachInput, setSeachInput] = useState('');

    const handleClick = event => {
      setisShownSearchRes(current => !current)
      setTarget(event.target);
    }
    function handleChange(e) {
      setSeachInput(e.target.value);
      // handleClick()
    }

    return (
      <Container>
        <InputGroup className="w-100 justify-content-end">
        <Form className="d-flex no-border" >
        <Form.Control
          type="search"
          placeholder="Search"
          backgroundcolor="#efeff4"
          aria-label="Search"
          aria-describedby="search-sec"
          onChange={handleChange}
          />
        <InputGroup.Text onClick={handleClick} id="search-sec" style={{ backgroundcolor: 'transparent'}}><BsSearch size={22}/></InputGroup.Text>
        </Form>
        </InputGroup>
        {isShownSearchRes && (<PopoverSearchList show={true} target={target} seachInput={seachInput} />)}
      </Container>
    )
}