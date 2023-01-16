import React, { useContext, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'

export const BuyPage = () => {
  const { item } = useContext(StoreContext)

  const currentElementsObj = item.reduce((value, index) => 
  ({...value, [index.id]: index}), {})

const [data, setData] = useState(currentElementsObj)

const handleUpdate = (i) => {
  setData({...data, [i.id]: i});
}

const countTottalPrice = Object.values(data).reduce((acc, curr) => acc + curr.amount * curr.price, 0)
const subtotalAmount = parseFloat(countTottalPrice.toFixed(2))
const shippingCost = 10.49
const tottalAmount = (subtotalAmount + shippingCost).toFixed(2)


 const checkElements = () => {
  console.log(typeof subtotalAmount*1)
 
 }

 const showCheckElements = () => {
  console.log(data);
 }
  
 
  return (
    <Container>
      BuyPage 
      {item.map(element => 
      <BuyCard key={element.id} element={element} setData={setData} handleUpdate={handleUpdate} />
      )}
     <div>
                    <p>Subtotal amount <span>€{subtotalAmount}*</span></p>
                    <p>Shipping costs <span>€{shippingCost}*</span></p>
                    <h5 className='fw-bold'>Total amount <span>€{tottalAmount}*</span></h5>
                </div>
                <Button onClick={checkElements}>Check</Button>
                <br />
                <br /> 
                <Button onClick={showCheckElements}>Show</Button>
    </Container>
  )
}
