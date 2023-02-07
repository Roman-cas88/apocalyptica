import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Alert, Button, Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'
import 'animate.css';

export const BuyPage = () => {
  const { item } = useContext(StoreContext)

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

let userInfo = {
  name: name,
  lastName: lastName,
  email: email
}

let buyCard = [
  userInfo
]

useEffect(() => {
buyCard.push(data)
// buyCard.push(userInfo)
buyCard.push("Payment: €" + tottalAmount)
}, [data, buyCard, tottalAmount])

const applyItems = () => {
  console.log(buyCard)
}
 
  return (
    <Container>
      BuyPage 
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
        <div style={{left:"50%", bottom:"50%"}} className="position-absolute animate__animated animate__fadeInUpBig color-green text-success">
          <Alert className='d-flex justify-content-center' variant="success">
            <div>
              <div className='display-1 fw-bolder'>Thanks</div>
              <div className='text-monospace ms-4' style={{display:"initial"}}>Our manager will contact you</div>
            </div>
          </Alert>
        </div>
      {/* <h1 class="animate__animated animate__bounce">An animated element</h1> */}
    </Container>
  )
}
