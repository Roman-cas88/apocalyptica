// npm install react-cookie-consent
// https://mastermindzh.github.io/react-cookie-consent/?path=/docs/cookieconsent--default

import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";

function getCookie(cname) {
    // let x = document.cookie;
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i]           
         while (c.charAt(0) === ' ') {
             c = c.substring(1);
           }

        if (c.indexOf(name) === 0) {     //  c == "myCookie=true" or "myCookie=false"
            console.log('name:',name, 'c:',c, 'c.substring(name.length',c.substring(name.length))
            // return c.substring(name.length, c.length);
            return c.substring(name.length);
          }
        }
        return "";
}

export const Cookie = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const isCookie = getCookie("myCookie");
        if(isCookie !== "true") {
        const timeout = setTimeout(() => {
            setIsShow(true)
        }, 3000);
        return () => {
            clearTimeout(timeout)
        };
    }
    }, []);

    return (
        <>
            {isShow && (
                <CookieConsent
                    debug
                    location="bottom"
                    buttonText="ACCEPT"
                    cookieName="myCookie"
                    style={{ display: "block", fontSize: "14px", color: "grey", background: "#f5f5f5" }}
                    buttonStyle={{ width: "40%", color: "white", fontSize: "1rem", background: "#1e4f7c" }}
                    expires={1}  // for debug
                    overlay
                    enableDeclineButton
                    flipButtons
                    declineButtonText="DENY"
                    declineButtonStyle={{ width: "40%", color: "white", fontSize: "1rem", background: "#1e4f7c" }}
                    buttonWrapperClasses="w-100 btn"
                    // onDecline={() => {
                    //     alert("nay!");
                    //   }}
                    // onAccept={() => {
                    //     alert("ok!");
                    // }}
                >
                    This site uses third-party website tracking technologies to provide and continually improve our services, and to display advertisements according to users' interests. I agree and may revoke or change my consent at any time with effect for the future.
                </CookieConsent>
            )}
        </>
    )
}

