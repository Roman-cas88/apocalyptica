import React, { useContext } from 'react'
import { Container, Form, Col, Row, Stack } from "react-bootstrap"
import { Button } from 'react-bootstrap'
import { Description } from './Description'
import "../Cards/cards.css"
import { Busket } from "../Busket/Busket"
import { StoreContext } from '../StoreContext/StoreContext'
import { ProductCarusel } from './ProductCarusel'

export const ProductContent = ({product}) => {
    
const { countItem, 
    handleShow, 
    addToBusket, 
    item,  
    amount,
    setAmount,
    size,
    setSize } = useContext(StoreContext)

const SoldOutImg = () => {
          return (product.isSold &&
        <div className="soldOut">Sold Out</div>
        )
}

const SoldOutShipping = () => {
    if (!product.isSold) {
        return (
            <ul style={{color:"#2ECC71"}}>
                    <li> In stock | 3 - 4 business days</li>
                </ul>
        )
    }
    else {
        return (
            <ul style={{color:"red"}}>
            <li> Not in stock at the moment</li>
        </ul>
        )
    }
}

const busket = {
    id: product.id,
    img: product.img,
    amount:amount,
    size:size,
    title: product.title,
    price: product.price,
  }

  const checkSameId = item.findIndex(el => el.id === busket.id)

const addItem = () => {
    handleShow()
    if (checkSameId === -1) {
        addToBusket(busket)
         countItem()
    }
}

const SoldOutButton = () => {

        return (!product.isSold &&
            <>
                <Col md="6">
                    <Button type="submit" onClick={ addItem } className="w-100">ADD TO CARD</Button>
                    <Busket />
                </Col>
            </>
        )
}

    return (
        <Container className='bg-white'>
        <Row>
            <Col className='d-none d-md-block position-relative me-3'>
                <img width="100%" src={product.img} alt={product.title} />
                <SoldOutImg />
            </Col>
            <Col>
                <div className="d-md-block d-flex flex-column align-items-center">
                    <div><p>Apocaliptica</p></div>
                    <div><h2>{product.title}</h2></div>
                    <div className='d-block d-md-none text-center position-relative'>
                        <img width="70%" src={product.img} alt={product.title} />
                        <SoldOutImg />
                        </div>
                    <div><h2>€{product.price.toFixed(2)} *</h2></div>
                    <div><h6>*incl. VAT plus shipping costs</h6></div>
                    <SoldOutShipping />
                </div>
                <Form>
                    <Form.Group className='mt-4'>
                        <Form.Label>Color:</Form.Label>
                        <Form.Select className="fw-bold">
                            <option>schwarz</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <Form.Label>Größe:</Form.Label>
                        <Form.Select value={size} onChange={(event) => setSize(event.target.value)} className="fw-bold">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </Form.Select>
                    </Form.Group>

                    <Row className='mt-4'>
                        <Col md="6" className='mb-4 mb-md-0'>
                            <Form.Group>
                            <Form.Select value={amount} onChange={(event) => setAmount(event.target.value)} className="fw-bold">
                                <option>1</option> 
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Select>
                            </Form.Group>
                        </Col>
                        <SoldOutButton />
                    </Row>

                    <hr />
                    <Stack direction='horizontal' gap={2}>
                    <h5>Order number: </h5>
                    <h5 className='mx-auto fw-light'>{product.id}</h5>
                    </Stack>                        
                </Form>
            </Col>
        </Row>
<Description product={product}/>
<ProductCarusel/>
    </Container>

    )
}