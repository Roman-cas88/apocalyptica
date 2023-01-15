import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'

export const BuyPage = () => {
  const { item } = useContext(StoreContext)

  return (
    <Container>
      BuyPage 
      {item.map(element => 
      <BuyCard key={element.id} element={element} />
      )}
     <div>
                    <p>Subtotal amount <span>€{0.00}*</span></p>
                    <p>Shipping costs <span>€{1}*</span></p>
                    <h5 className='fw-bold'>Total amount <span>€{1}*</span></h5>
                </div>
    </Container>
  )
  
}
