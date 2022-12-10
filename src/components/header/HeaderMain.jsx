import React from 'react';
import HeaderNavIcons from './HeaderNavIcons';

export function HeaderLogo() {
  const url = "https://d1lhyycl5p8pom.cloudfront.net/media/image/ff/be/cd/apocalyptica.png";
  return (
    <div >
      <img src={url} alt="Official Apocalyptica Shop" style={{display: "block", height: "auto"}}></img>
    </div>
  )
}
export default function HeaderMain() {
  return (
    <div>
      <HeaderLogo />
    </div>
  )
}