import React from 'react'
import { Container, Row, Col, Button, Accordion, Card, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { Cards } from "../Cards/Card"
import { ImFilter } from 'react-icons/im'
import { BiDownArrow } from 'react-icons/bi'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useState } from "react"
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './filter.css'

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
                id="filter"
                value="1"
                className='border'
                onClick={accordionHook}
                type="checkbox"
                variant="light"
                size='sm'
            >
                    <ImFilter className='mb-1 me-2' size={14}/> 
                    Filters
                    <BiDownArrow className='ms-5'/>
            </Button>
    )
};

const [show, setShow] = useState(false)

      return (            
        <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomButton eventKey="0"/>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                                <ToggleButtonGroup type="checkbox">
                                    <ToggleButton
                                        className='rounded'
                                        id="tbg-check-1"
                                        value={1}
                                        variant="outline-primary"
                                        onChange={check}
                                        >
                                        In Stock
                                    </ToggleButton>
                                    <ToggleButton
                                        className='rounded ms-5 px-4'
                                        id="tbg-check-2"
                                        value={2}
                                        variant="outline-primary"
                                        checked={show}
                                        onChange={() => {
                                            setShow(!show)
                                            setPriceValue(price)
                                        }}
                                        >
                                        Price
                                    </ToggleButton>
                                    </ToggleButtonGroup>
                                {show &&
                                <Container id='price' className="w-50 mt-2 rounded border">
                                    <p className='text-center'><b>Price</b></p>
                                    <RangeSlider 
                                        min={minPrice} 
                                        max={maxPrice} 
                                        defaultValue={priceValue}
                                        step="any"
                                        onInput={value => setPriceValue(value)}
                                        />
                                    <p className='text-center mt-1'>from <b>€{priceMinFixed}</b> to <b>€{priceMaxFixed}</b></p>
                                </Container>
                                }
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