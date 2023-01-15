import React from 'react';
import { Link } from "react-router-dom";

export default function HeaderLogo() {
  const url = "https://d1lhyycl5p8pom.cloudfront.net/media/image/ff/be/cd/apocalyptica.png";
  return (
    <div > 
      <Link to="/">
      <img src={url} className="d-block mw-100" alt="Official Apocalyptica Shop" />
      </Link>
    </div>
  )
}
