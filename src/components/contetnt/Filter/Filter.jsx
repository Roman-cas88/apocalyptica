import React from 'react'
import { Container, Row, Col, Button, Accordion, Card } from 'react-bootstrap'
import { Cards } from "../Cards/Card"
import { ImFilter } from 'react-icons/im'
import { BiDownArrow } from 'react-icons/bi'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useState } from "react"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const Filter = ({props}) => {
// Price filter
    let filtPrice = [];
    props.forEach(el => filtPrice.push(el.price));
    const minPrice = Math.min(...filtPrice);
    const maxPrice = Math.max(...filtPrice);
    const price = [minPrice, maxPrice];
    const [priceValue, setPriceValue] = useState(price);
    const priceMinFixed = priceValue[0].toFixed(2);
    const priceMaxFixed = priceValue[1].toFixed(2);

// Sold out filter
let [inStock, setInStock] = useState(false);

const check = () => {
    setInStock(inStock = !inStock)
};

const removeSoldOut = (el) => {
    if (inStock === false) {
        return {display: "initial"}
    }
    if (inStock === el) {
        return {display: "none"}
    }
};

const CustomButton = ({eventKey}) => {
    const accordionHook = useAccordionButton(eventKey)
    return (
        <Button 
            className='border border-secondary'
            onClick={accordionHook}
            variant="light" 
            size='sm'
        >
                <ImFilter className='mb-1 me-2' size={14}/> 
                Filters
                <BiDownArrow className='ms-5'/>
        </Button>
    )
};

      return (            
        <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomButton eventKey="0"/>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <input className='me-3' type="checkbox" name="check" onChange={check}/>
                                    <label htmlFor="check">In stock</label>
                                </Col>
                                <Col>
                                    <Container className="m-3 mx-auto">
                                        <p className='text-center'><b>Price</b></p>
                                        <RangeSlider 
                                            min={minPrice} 
                                            max={maxPrice} 
                                            defaultValue={priceValue}
                                            step="any"
                                            onInput={value => setPriceValue(value)}
                                            />
                                        <p className='text-center'>from <b>€{priceMinFixed}</b> to <b>€{priceMaxFixed}</b></p>
                                    </Container>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                    <Row xs={2} md={2} lg={3} xl={4} className="g-3">
                    {props.map((card) => ( 
                        card.price >= priceMinFixed && card.price <= priceMaxFixed &&
                        <Col key={card.id} style={removeSoldOut(card.isSold)}>
                            <Cards card={card} />
                        </Col>
                    ))}
                    </Row>
        </Container>
  )
}