import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import { BuyCard } from './BuyCard'

export const BuyPage = () => {
  const { item } = useContext(StoreContext)

  return (
    <Container>
      BuyPage
      {item.map(element => 
      <BuyCard key={element.id} element={element}/>
      )}
     
    </Container>
  )
}
