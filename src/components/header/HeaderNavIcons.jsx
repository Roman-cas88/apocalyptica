import React from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Form, Button } from "react-bootstrap/";
import { Link } from 'react-router-dom';

  export default function HeaderNavIcons() {
    const linkStyle = {     
      margin: ".5rem",
      color: 'black',
    }
    return (
      // size: https://www.folkstalk.com/tech/react-icon-size-with-code-examples/
      <div >
        <Link to="/" style={linkStyle} ><BsSearch size={22}/></Link>
        <Link to="/" style={linkStyle} ><BsPersonFill  size={28}/></Link>
        <Link to="/" style={linkStyle} ><BsCartCheckFill  size={28}/></Link>
      </div>
    )
  }

