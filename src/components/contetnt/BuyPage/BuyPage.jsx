import React, { useContext, useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'

export const BuyPage = () => {
  const { item } = useContext(StoreContext)

  const currentElements = item.map(curr => [{
    id: curr.id, 
    price: curr.price, 
    size: curr.size,
    amount: curr.amount
  }])

  const currentElementsObj = item.reduce((value, index) => 
  ({...value, [index.id]: index}), {})

const [data, setData] = useState(currentElementsObj)

const handleUpdate = (i) => {
  setData({...data, [i.id]: i});
}

 const checkElements = () => {
  console.log(Object.keys.amount(data))
 
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
                    <p>Subtotal amount <span>€{"subtotalAmount"}*</span></p>
                    <p>Shipping costs <span>€{1}*</span></p>
                    <h5 className='fw-bold'>Total amount <span>€{1}*</span></h5>
                </div>
                <Button onClick={checkElements}>Check</Button>
                <br />
                <br /> 
                <Button onClick={showCheckElements}>Show</Button>
    </Container>
  )
}
