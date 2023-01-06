import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from "../Cards/data.json"

export const BusketItem = () => {
   
let { shirts } = data

  return (
    <Container style={{border:"solid"}}>
        <Row>
            <Col>
                <img width="100%" src={shirts[0].img} alt="Item" />
            </Col>
            <Col style={{position: "inline-block"}}>
                <b>{1}x</b> {shirts[0].title}
                <p className='fw-bold'>€{shirts[0].price}*</p>  
            </Col>
            <Col>
                <button style={{border:"none", backgroundColor:"rgb(250, 219, 219, 0.8)"}} className='w-100 h-100'>X</button>
            </Col>

        </Row>
    </Container>
  )
}
