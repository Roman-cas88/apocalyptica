import { useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { StoreContext } from "../StoreContext/StoreContext"
import { BusketItem } from "./BusketItem"

export const Busket = () => {
    
   const { show, handleClose, clearBusket, item } = useContext(StoreContext)

    const clear = () => {
        clearBusket()
        handleClose()
    }

    let shippingCost = 10.49
    // let itemMap = item.map(() => (<BusketItem i={i}/>))
    
    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header onClick={handleClose} className='bg-black p-2' style={{color:"grey", cursor:"pointer"}}>
            ❰ Continue shopping
        </Offcanvas.Header>
        <Offcanvas.Body>
            <BusketItem />
            <hr />
            <div>
                <p>Subtotal amount <span>€{0.00}*</span></p>
                <p>Shipping costs <span>€{shippingCost}*</span></p>
                <h5 className='fw-bold'>Total amount <span>€{0.00}*</span></h5>
            </div>

        <button onClick={clear}>Clear Busket</button>
        <button onClick={() => console.log(1)}>Show</button>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 