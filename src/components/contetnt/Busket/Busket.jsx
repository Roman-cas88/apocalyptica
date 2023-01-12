import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Account/UserContext';
import { StoreContext } from "../StoreContext/StoreContext"
import { BusketItem } from "./BusketItem"

export const Busket = () => {
    
    const { show, handleClose, clearBusket, item } = useContext(StoreContext)
    const { checkRegister } = useContext(UserContext)
    const clear = () => {
        clearBusket()
        handleClose()
    }

    let shippingCost = 10.49
    let itemMap = item.map((map) => (<BusketItem key={map.id + Math.random()} id={map.id} price={map.price} 
        img={map.img} title={map.title} amount={map.amount} size={map.size}/> ))
    const navigate = useNavigate()
    const checkFunc = () => {
       
        if (!checkRegister) {
            console.log("TRUE");
            let text = "If you want to confirm the order - you need to register\nEither OK or Cancel.";
            if (window.confirm(text) === true) {
                navigate('/account')
                handleClose()
              } 
        }
        else {
        navigate("/buy-page")
        handleClose()}
    }
    
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

        <Button onClick={clear}>Clear Busket</Button>
        {item.length > 0 &&
                <Button onClick={checkFunc}>Buy</Button>
            }
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 