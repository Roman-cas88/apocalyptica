import React, { useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Overlay, Popover } from "react-bootstrap/";
import { UserContext } from "../contetnt/Account/UserContext";
import { logout } from '../contetnt/Account/Authentication';

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
    const curuser = useContext(UserContext);

    const handleSignoutClick = () => {
        console.log("sign out:");
        logout()
    };

    return (
        <>
            <Nav className="flex-column bg-light px-2">
                {!curuser && (
                    <NavLink className='p-2 w-100 mx-auto bg-secondary text-white text-decoration-none' to="/account" >Sign in</NavLink>
                )}
                {!curuser && (
                    <NavLink className={navLinkStyle} to="/account" >or register</NavLink>
                )}
                {curuser && (
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


                {/* <Nav.Link className='w-100 mx-auto bg-secondary text-white'><Link style={unsetStyle} to="/account" >Sign in</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >or register</Link></Nav.Link>
          <hr />
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Overview</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Profile</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Addresses</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Payment methods</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Order</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/account" >Instant downloads</Link></Nav.Link>
          <Nav.Link className='w-100 mx-auto text-dark'><Link style={unsetStyle} to="/wishlist" >Wish list</Link></Nav.Link> */}
            </Nav>
        </>
    )
};


//   const handleChange = (event) => {
//     setLanguage(event.target.value);
//   };