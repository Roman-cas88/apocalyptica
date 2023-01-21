import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
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
const subtotalAmount = parseFloat(countTottalPrice)
const shippingCost = 10.49
const tottalAmount = (subtotalAmount + shippingCost).toFixed(2)

const deleteCart = (id) => {
  delete data[id]
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
                    <h5 className='fw-bold'>Total amount <span>€{tottalAmount}*</span></h5>
                </div>
    </Container>
  )
}
