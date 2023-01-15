import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from "react-icons/bs"
import { UserContext } from '../Account/UserContext';
import { StoreContext } from "../StoreContext/StoreContext"
import { BusketItem } from "./BusketItem"

export const Busket = () => {
    
    const { show, handleClose, clearBusket, item, itemAdded } = useContext(StoreContext)
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
            let text = "If you want to confirm the order - you need to register\nEither OK or Cancel.";
            if (window.confirm(text) === true) {
                navigate('/account')
                handleClose()
              } 
            else {handleClose()}
        }
        else {
        navigate("/buy-page")
        handleClose()}
    }
    const countTottalPrice = item.reduce((acc, curr) => acc + curr.amount * curr.price, 0)

    const [allPrice, setAllPrice] = useState(countTottalPrice)

    useEffect(() => {
        setAllPrice(countTottalPrice)
    }, [item, countTottalPrice])

    let tottalAmount = (allPrice + shippingCost).toFixed(2)
    
    return (
        <>
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header onClick={handleClose} className='bg-black p-2' style={{color:"grey", cursor:"pointer"}}>
                ❰ Continue shopping
            </Offcanvas.Header>

            {itemAdded  &&
                <div className='added-item'>
                    <div className='check-mark'>
                        <BsCheckLg size={20}/>
                    </div>
                    <div className='added-item-text'>
                        The product was successfully added to your shopping cart
                    </div>
                </div>
            }
            
            <Offcanvas.Body>
                {itemMap}
                <div className="d-grid gap-2">
                    <Button size='sm' variant="secondary" onClick={clear}>Clear Busket</Button>
                </div>

                <hr />
                <div>
                    <p>Subtotal amount <span>€{allPrice}*</span></p>
                    <p>Shipping costs <span>€{shippingCost}*</span></p>
                    <h5 className='fw-bold'>Total amount <span>€{tottalAmount}*</span></h5>
                </div>
                <div className="d-grid gap-2">
                    {item.length > 0 &&
                    <Button size='lg' onClick={checkFunc}>Buy</Button>
                    }
                </div>
            </Offcanvas.Body>
      </Offcanvas>
        </>
    )
} 