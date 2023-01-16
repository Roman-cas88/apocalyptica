import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Image, Container, Button, Dropdown } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'


export const BuyCard = ({element, setData, handleUpdate}) => {
const { deleteItem } = useContext(StoreContext)

const [size, setSize] = useState(element.size)
const [amount, setAmount] = useState(element.amount)
const [price, setPrice] = useState(element.price)

let oldData = {
    id: element.id,
    img: element.img,
    amount: amount,
    size: size,
    title: element.title,
    price: element.price,
}

useEffect(() => {
    setPrice(price)
    setAmount(amount)
    setSize(size)
    handleUpdate(oldData)
    // setData([{
    //     id: element.id, 
    //     price: price, 
    //     size: size,
    //     amount: amount
    // }])
}, [size, amount, price, element])


return (
    <Container className='bg-white mb-2 border'>
    <Row className='text-center mh-100'>
        <Col md="2">
            <Image src={element.img} alt={element.title} fluid />
        </Col>
        <Col md="5">
            <div  className="h-100 d-flex align-items-center justify-content-center m-md-0 m-2">
                {element.title}
            </div>
        </Col>
        <Col md="1" xs="6">
            <div className="h-100 d-flex align-items-center justify-content-center m-md-0 m-2">
                <Dropdown  size="lg">
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      {size}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setSize("S")}>S</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSize("M")}>M</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSize("L")}>L</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSize("XL")}>XL</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSize("XXL")}>XXL</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Col>
        <Col md="1" xs="6">
        <div className="h-100 d-flex align-items-center justify-content-center m-md-0 m-2">
                <Dropdown  size="lg">
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                      {amount}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setAmount(1)}>1</Dropdown.Item>
                        <Dropdown.Item onClick={() => setAmount(2)}>2</Dropdown.Item>
                        <Dropdown.Item onClick={() => setAmount(3)}>3</Dropdown.Item>
                        <Dropdown.Item onClick={() => setAmount(4)}>4</Dropdown.Item>
                        <Dropdown.Item onClick={() => setAmount(5)}>5</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Col>
        <Col md="2">
            <div className="h-100 d-flex align-items-center justify-content-center m-md-0 m-2">
            €{(price * amount).toFixed(2)}*
            </div>
        </Col>
        <Col md="1">
            <div className="h-100 d-none d-md-flex align-items-center justify-content-center">
                <button onClick={() => deleteItem(element.id)} type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="h-100 d-md-none d-flex align-items-center justify-content-center">
                <div className="d-grid gap-2 w-100 m-2">
                    <Button size="sm" variant="danger" onClick={() => deleteItem(element.id)}>Delete Item</Button>
                </div>
            </div>
        </Col>
    </Row>
    
    </Container>
  )
}
