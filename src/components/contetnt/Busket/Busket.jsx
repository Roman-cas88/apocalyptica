// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Busket = ({show, propsHandleClose}) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const propsHandleShow = handleShow;
    // const handleShow = () => setShow(true);
    
    return (
        <>
        {/* <Button onClick={handleShow} className="w-100">ADD TO CARD</Button> */}

        <Offcanvas show={show} onHide={propsHandleClose} placement="end">
        <Offcanvas.Header onClick={propsHandleClose} className='bg-black p-2' style={{color:"grey", cursor:"pointer"}}>
            ❰ Continue shopping
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 