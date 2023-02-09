import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import './basketItem.css'

export const BasketItem = ({ price, title, img, id, amount, size }) => {
    const { deleteItem } = useContext(StoreContext)

  return (
    <Container className='Container'>
        <Row>
            <Col xs lg="3" className='Col-1'>
                <div>
                <img width="100%" src={img} alt="Item" />
                </div>   
            </Col>
            <Col xs lg="7" className='Col-2'>
                <div>
                    <b>{amount}x</b>  {title}
                    <p><b>size: {size}</b></p>
                    <p className='fw-bold'>€{price.toFixed(2)}*</p>  
                </div>
            </Col>
            <Col md="auto" className='Col-3'>
                <div>
                    <button onClick={() => deleteItem(id)}>X</button>
                </div>
            </Col>

        </Row>
    </Container>
  )
}
