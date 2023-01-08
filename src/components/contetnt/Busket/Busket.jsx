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
    let itemMap = item.map((map) => (<BusketItem key={map.id} id={map.id} price={map.price} 
        img={map.img} title={map.title}/>))
    
    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header onClick={handleClose} className='bg-black p-2' style={{color:"grey", cursor:"pointer"}}>
            ❰ Continue shopping
        </Offcanvas.Header>
        <Offcanvas.Body>
            {itemMap}
            <hr />
            <div>
                <p>Subtotal amount <span>€{0.00}*</span></p>
                <p>Shipping costs <span>€{shippingCost}*</span></p>
                <h5 className='fw-bold'>Total amount <span>€{0.00}*</span></h5>
            </div>

        <button onClick={clear}>Clear Busket</button>
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 