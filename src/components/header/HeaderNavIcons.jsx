import React, {useState} from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

  export default function HeaderNavIcons() {
    const linkStyle = {     
      margin: ".5rem",
      color: 'black',
    }
    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
      setIsShown(current => !current)
    }
    return (
      // size: https://www.folkstalk.com/tech/react-icon-size-with-code-examples/
      <Container>

        <div className="pt-2 text-end">
        <Link onClick={handleClick} style={linkStyle} ><BsSearch size={22}/></Link>
        <Link to="/" style={linkStyle} ><BsPersonFill  size={28}/></Link>
        <Link to="/" style={linkStyle} ><BsCartCheckFill  size={28}/></Link>
        </div>
        <div className="text-end">
        {isShown && (
        <HeaderSearch /> )}
        </div>
         </Container>    

    )
  }

