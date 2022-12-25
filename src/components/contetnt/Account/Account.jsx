import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap/";

export const Account = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Form className='border p-3 mb-5'>
                        <h6>I'm already a customer.</h6>
                        <hr />
                        <p>Log in with your email address and password</p>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Your password" />
                        </Form.Group>

                        <p>Forgot your password?</p>
                        <Button variant="info" className='bg-blue' type="submit">Login    ></Button>
                    </Form>
                    <h6>My benefits</h6>
                    <p>- Express Shopping</p>
                    <p>- Save your user data and settings</p>
                    <p>- Overview of your orders incl. shipping informations</p>
                    <p>- Wishlist</p>
                </Col>
                <Col>
                    <Form className='border p-3 mb-5'>
                        <h6>I'm a new customer.</h6>
                        <hr />
                        <Form.Group className="mb-3">
                        <Form.Select aria-label="Default select example">
                            <option>Salutation</option>
                            <option value="1">Ms</option>
                            <option value="2">Ms</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="First name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Re-enter your email address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Your password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Re-enter your password" />
                            <Form.Text className="text-muted">
                            Your password must contain at least 12 characters. <br/>
                            The password is case sensitive.
                            </Form.Text>
                        </Form.Group>

                        <h6 className='mt-5'>Your address</h6>
                        <hr />
                        <Row className="col-10 mx-auto bg-warning text-white" >
                        <Col xs={1} className="">
                        <h1>i</h1>
                        </Col>
                        <Col >
                        <Form.Text className="">
                        Please make sure that you enter the correct values into the rights fields, so that we can process your order.
                        </Form.Text>
                        </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


