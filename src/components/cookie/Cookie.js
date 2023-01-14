// npm install react-cookie-consent
import { useState } from "react";
import CookieConsent from "react-cookie-consent";

export const Cookie = () => {

    return (
        <CookieConsent 
        debug = 'true'
        location="bottom"
        buttonText= "ACCEPT"
        cookieName="myCookie"
        style={{fontSize: "14px", color: "grey", background: "#f5f5f5"}}
        buttonStyle={{ color: "white", fontSize: "1rem", background: "#1e4f7c" }}
        expires={1}
        overlay
        enableDeclineButton 
        onDecline={() => {
            // alert("nay!");
          }}
        flipButtons
        declineButtonText ="DENY"
        declineButtonStyle = {{  color: "white", fontSize: "1rem", background: "#1e4f7c" }}
        >
        This site uses third-party website tracking technologies to provide and continually improve our services, and to display advertisements according to users' interests. I agree and may revoke or change my consent at any time with effect for the future.
        </CookieConsent>
    )
}

{/* <CookieConsent ButtonComponent="button"
     ButtonComponentStyle={
     color: "#ffff",
     background: "#245564",
     padding: "10px 20px",
     borderRadius: "16px",
     fontSize: "1em",
     display: "flex",
     alignContent: "center",
     }>
     </CookieConsent> */}