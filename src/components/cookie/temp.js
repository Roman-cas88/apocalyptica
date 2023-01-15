// npm install react-cookie-consent
// https://mastermindzh.github.io/react-cookie-consent/?path=/docs/cookieconsent--default
// import React from 'react';
import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import HeaderSearch from '../header/HeaderSearch';

export const Cookie = () => {
    const url = "https://d1lhyycl5p8pom.cloudfront.net/media/image/ff/be/cd/apocalyptica.png";
    return (
      <div >
        <img src={url} alt="Official Apocalyptica Shop" style={{display: "block", height: "auto"}} />

      </div>
    )
  }

//const [isShow, setIsShow] = useState(false);

// console.log('111')
//  useEffect(() => {
//     const timeout = setTimeout(() =>{
//         console.log('useEffect')
//     }, 3000);
//     return () => {
//         setIsShow(true)
//         clearTimeout(timeout)};
// }, []);
// console.log('222')
        // {isShow && (       
// <CookieConsent 
        // debug
        // location="bottom"
        // buttonText= "ACCEPT"
        // cookieName="myCookie"
        // style={{display: "block",  fontSize: "14px", color: "grey", background: "#f5f5f5"}}
        // buttonStyle= {{width: "40%", color: "white", fontSize: "1rem", background: "#1e4f7c" }}
        // expires={14}
        // overlay
        // enableDeclineButton 
        // flipButtons
        // declineButtonText ="DENY"
        // declineButtonStyle = {{width: "40%", color: "white", fontSize: "1rem", background: "#1e4f7c" }}
        // buttonWrapperClasses = "w-100 btn"       
        // >
        // This site uses third-party website tracking technologies to provide and continually improve our services, and to display advertisements according to users' interests. I agree and may revoke or change my consent at any time with effect for the future.
        // </CookieConsent>