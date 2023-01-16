import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Image, Container, Dropdown } from 'react-bootstrap'
import { StoreContext } from '../StoreContext/StoreContext'


export const BuyCard = ({element, handleUpdate, deleteCart}) => {
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
}, [size, amount, price, element])

const deleteElement = () => {
    deleteItem(element.id)
    deleteCart(element.id)
}

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
                <button onClick={deleteElement} type="button" className="btn-close" aria-label="Close"></button>
            </div>
        </Col>
    </Row>
    
    </Container>
  )
}
