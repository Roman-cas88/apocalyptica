import React, { useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Overlay, Popover } from "react-bootstrap/";
import { UserContext } from "../contetnt/Account/UserContext";

export const PopoverMyAccount = (props) => {
    const ref = useRef(null);
    const [show, setShow] = useState(props.show);
    return (
        <div ref={ref} >
            <Overlay
                show={show}
                target={props.target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained" onClick={() => setShow(false)}>
                    <Popover.Header as="h3">My Account</Popover.Header>
                    <Popover.Body className='p-0 '>
                        <NavMyAccount />
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    )
}

const NavMyAccount = () => {
    const navLinkStyle = 'p-2 text-decoration-none w-100 mx-auto text-dark';
    const {nameAccount, logout} = useContext(UserContext);

    const handleSignoutClick = () => {
        logout()
    };
    return (
        <>
            <Nav className="flex-column bg-light px-2">
                {!nameAccount && (
                    <NavLink className='p-2 w-100 mx-auto bg-secondary text-white text-decoration-none' to="/account" >Sign in</NavLink>
                )}
                {!nameAccount && (
                    <NavLink className={navLinkStyle} to="/account" >or register</NavLink>
                )}
                {nameAccount && (
                    <NavLink className={navLinkStyle} onClick={handleSignoutClick} to="/">Sing out</NavLink>
                )}

                <hr />
                <NavLink className={navLinkStyle} to="/account" >Overview</NavLink>
                <NavLink className={navLinkStyle} to="/account" >Profile</NavLink>
                <NavLink className={navLinkStyle} to="/account" >Addresses</NavLink>
                <NavLink className={navLinkStyle} to="/account" >Payment methods</NavLink>
                <NavLink className={navLinkStyle} to="/account" >Order</NavLink>
                <NavLink className={navLinkStyle} to="/account" >Instant downloads</NavLink>
                <NavLink className={navLinkStyle} to="/wishlist" >Wish list</NavLink>
            </Nav>
        </>
    )
};


