import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'
import './busketItem.css'

export const BusketItem = ({ price, title, img, id }) => {
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
                    <b>{1}x</b> {title}
                    <p className='fw-bold'>€{price}*</p>  
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
