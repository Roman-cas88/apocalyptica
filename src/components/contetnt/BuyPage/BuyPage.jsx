import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'
import 'animate.css';

export const BuyPage = () => {
  const { item, clearBasket } = useContext(StoreContext)

  const currentElementsObj = item.reduce((value, index) => 
  ({...value, [index.id]: index}), {})

const [data, setData] = useState(currentElementsObj)

const handleUpdate = (i) => {
  setData({...data, [i.id]: i});
}

const countTottalPrice = Object.values(data).reduce((acc, curr) => acc + curr.amount * curr.price, 0)
const subtotalAmount = parseFloat(countTottalPrice)
const shippingCost = 10.49
const tottalAmount = (subtotalAmount + shippingCost).toFixed(2)

const deleteCart = (id) => {
  delete data[id]
}

let user = localStorage.getItem("user")
let name = JSON.parse(user).firstName
let lastName = JSON.parse(user).lastName
let email = JSON.parse(user).email
let salutation = JSON.parse(user).salutation

let userInfo = {
  salutation: salutation,
  name: name,
  lastName: lastName,
  email: email
}

let buyCard = [
  userInfo
]

useEffect(() => {
buyCard.push(data)
buyCard.push("Payment: €" + tottalAmount)
}, [data, buyCard, tottalAmount])

let [hide, setHide] = useState({display:"block"})
let [show, setShow] = useState({display:"none"})

const applyItems = () => {
  setHide({display:"none"})
  setShow({display:"block"})
  clearBasket()
  console.log(buyCard)
}
 
  return (
    <Container>
      <Container style={hide}>

      {item.map(element => 
        <BuyCard key={element.id} element={element} deleteCart={deleteCart} handleUpdate={handleUpdate} />
        )}

      <div>
        <p>Subtotal amount <span>€{subtotalAmount.toFixed(2)}*</span></p>
        <p>Shipping costs <span>€{shippingCost}*</span></p>
        <h5 className='fw-bold'>Total amount 
          <span className='ms-2'>€{tottalAmount}*</span>
          <span>
            <Button onClick={applyItems} className='ms-5 mb-4 ps-5 pe-5' variant="success" size="lg">BUY NOW</Button>
          </span>
        </h5>
      </div>
    </Container>
        <div style={show} className="animate__animated animate__fadeInUpBig color-green text-success">
          <Alert className='d-flex justify-content-center' variant="success">
            <div>
              <div className='display-1 fw-bolder d-flex justify-content-center'>Thanks</div>
              <div className='text-monospace d-flex justify-content-center'>Our manager will contact you</div>
              <div className='d-flex justify-content-center mt-5'><Button onClick={() => {window.location.href = "/"}} variant='success'>Return to store</Button></div>
            </div>
          </Alert>
        </div>
  </Container>
)
}
