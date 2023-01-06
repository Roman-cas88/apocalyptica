import { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StoreContext } from "../StoreContext/StoreContext"
export const Busket = () => {
    const { show, handleClose, clearBusket } = useContext(StoreContext)
    const clear = () => {
        clearBusket()
        handleClose()
    }
 
    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header onClick={handleClose} className='bg-black p-2' style={{color:"grey", cursor:"pointer"}}>
            ❰ Continue shopping
        </Offcanvas.Header>
        <Offcanvas.Body>
        <button onClick={clear}>Clear Busket</button>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 