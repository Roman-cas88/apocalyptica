import React from 'react'
import { Col, Row, Image, Container, Button } from 'react-bootstrap'


export const BuyCard = ({element}) => {

        
  return (
    <Container className='bg-white mb-2 border'>
    <Row className='text-center mh-100'>
        <Col md="2">
            <Image src={element.img} alt={element.title} fluid />
        </Col>
        <Col md="5">
            <div  className="h-100 d-flex align-items-center justify-content-center">
                {element.title}
            </div>
        </Col>
        <Col md="auto" xs="6">
            <div className="h-100 d-flex align-items-center justify-content-center">
               {element.size}
            </div>
        </Col>
        <Col md="auto" xs="6">
            <div className="h-100 d-flex align-items-center justify-content-center">
                {element.amount}
            </div>
        </Col>
        <Col md="2">
            <div className="h-100 d-flex align-items-center justify-content-center">
                {element.price}
            </div>
        </Col>
        <Col md="auto">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <Button>DELETE</Button>
            </div>
        </Col>
    </Row>
    
    </Container>
  )
}
