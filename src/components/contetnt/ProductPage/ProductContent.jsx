import React, { useContext, useState } from 'react';
import { Container, Form, Col, Row, Stack } from "react-bootstrap"
import { Button } from 'react-bootstrap';
import { Description } from './Description'
import "../Cards/cards.css"
import { Busket } from "../Busket/Busket"
import { StoreContext } from '../StoreContext/StoreContext';

export const ProductContent = ({product}) => {
    
const { countItem, handleShow, addToBusket, item } = useContext(StoreContext)

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

const [amount, setAmount] = useState(1)
const [size, setSize] = useState("S")


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
                <Col>
                    <Button onClick={ addItem } className="w-100">ADD TO CARD</Button>
                    <Busket />
                </Col>
            </>
        )
    
}


    return (
        <Container>
        <Row>
            <Col style={{position:"relative", textAlign:"center"}}>
                <img width="400px" src={product.img} alt={product.title} />
                <SoldOutImg />
            </Col>
            <Col>
                <p>Apocaliptica</p>
                <h2>{product.title}</h2>
                <h2>€{product.price.toFixed(2)} *</h2>
                <h6>*incl. VAT plus shipping costs</h6>
                <SoldOutShipping />
                <Form>
                    <Form.Group className='mt-4'>
                        <Form.Label>Color:</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>schwarz</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <Form.Label>Größe:</Form.Label>
                        <Form.Select onChange={(event) => setSize(event.target.value)} id="size">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            <option>XXL</option>
                        </Form.Select>
                    </Form.Group>

                    <Row className='mt-4'>
                    <Col>
                    <Form.Group>
                        
                        <Form.Select onChange={(event) => setAmount(event.target.value)} id="quantity" className="fw-bold">
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
    </Container>

    )
}