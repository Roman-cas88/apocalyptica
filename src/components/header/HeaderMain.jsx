import React from 'react';
import HeaderNavIcons from './HeaderNavIcons';

export default function HeaderMain() {
  return (
    <div>
      <HeaderLogo />
      <HeaderNavIcons />
    </div>
  )
}

export function HeaderLogo() {
    return (
      <div>
        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/image/ff/be/cd/apocalyptica.png" alt="Official Apocalyptica Shop"></img>
      </div>
    )
  }
