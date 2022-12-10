import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain'


export default function Header() {
  const isMobile = window.screen.width < 700;

  return (
    <div> 
      { isMobile && <HeaderTop /> }  
      <HeaderTop />    
      <HeaderMain />
    </div>
  )
}