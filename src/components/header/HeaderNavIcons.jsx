import React from 'react';
import { BsSearch, BsPersonFill, BsCartCheckFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

  export default function HeaderNavIcons() {
    const linkStyle = {     
      margin: ".5rem",
      color: 'black',
      height: '50'
    }
    return (
      <div className="justify-content-end">
        <Link to="/" style={linkStyle} ><BsSearch /></Link>
        <Link to="/" style={linkStyle} ><BsPersonFill /></Link>
        <Link to="/" style={linkStyle} ><BsCartCheckFill /></Link>
     
      </div>
    )
  }