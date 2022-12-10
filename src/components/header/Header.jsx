import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain'
import NavBar from '../navbar/NavBar';

export default function Header() {
  return (
    <div> 
      <HeaderTop />
      <HeaderMain />
      <NavBar />
    </div>
  )
}