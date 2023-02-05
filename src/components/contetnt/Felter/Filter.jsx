import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Cards } from "../Cards/Card"
import { ImFilter } from 'react-icons/im'

import { useState } from "react"

import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


export const Filter = ({props}) => {

// Price filter
    let filtPrice = []
    props.forEach(el => filtPrice.push(el.price))
    const minPrice = Math.min(...filtPrice)
    const maxPrice = Math.max(...filtPrice)
    const price = [minPrice, maxPrice]
    const [priceValue, setPriceValue] = useState(price)
    const priceMinFixed = priceValue[0].toFixed(2);
    const priceMaxFixed = priceValue[1].toFixed(2);


// Sold out filter
let [inStock, setInStock] = useState(false)

const check = () => {
    setInStock(inStock = !inStock)
}

const i = (el) => {
    if (inStock === false) {
        return {display: "initial"}
    }
    if (inStock === el) {
        return {display: "none"}
    }
}




      return (            
        <Container>
            <ImFilter />
            <p>Price min: {priceMinFixed}; Price max: {priceMaxFixed}</p>
            <input type="checkbox" name="check" onChange={check}/>
            <label htmlFor="check">in stock</label>
            <Container className="m-3">
                <RangeSlider 
                    min={0} 
                    max={100} 
                    defaultValue={priceValue}
                    step="any"
                    onInput={value => setPriceValue(value)}
                    />
            </Container>
            <Container>
                    <Row xs={2} md={2} lg={3} xl={4} className="g-3">
                    {props.map((card) => ( 
                        card.price >= priceMinFixed && card.price <= priceMaxFixed &&
                        <Col key={card.id} style={i(card.isSold)}>
                            <Cards card={card} />
                        </Col>
                    ))}
                    </Row>
            </Container>

        </Container>

  )
}
