import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";

export function NewAccount() {
    return (
        <div>
            <Form className='border p-3 mb-5'>
                <h6>I'm a new customer.</h6>
                <hr />
                <Form.Group className="mb-3">
                    <Form.Select required aria-label="Default select example">
                        <option>Salutation *</option>
                        <option value="1">Ms</option>
                        <option value="2">Ms</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control required type="text" placeholder="First name*" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control required type="text" placeholder="Last name*" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Your email address*" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Re-enter your email address*" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required type="password" placeholder="Your password*" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control required type="password" placeholder="Re-enter your password*" />
                    <Form.Text className="text-muted">
                        Your password must contain at least 12 characters. <br />
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
                <hr />
                <Form.Group className="mb-3">
                    <Form.Select required aria-label="Default select">
                        <option>Country*</option>
                        <option value="1">Sweden</option>
                        <option value="2">Deutschland</option>
                    </Form.Select>
                </Form.Group>
                <Row>
                    <Col xs={4}>
                        <Form.Group className="mb-3">
                            <Form.Control required type="text" placeholder="Zipcode*" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control required type="text" placeholder="City*" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <Form.Group className="mb-3">
                            <Form.Control required type="text" placeholder="Street or 'Packstation'*" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Control required type="text" placeholder="House/Packstat*" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="DHL Packstation Postnummer" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Additional address line 2" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        label="The shipping address does not match the billing address"
                    />
                </Form.Group>
                <p>The fields marked with * are required</p>

                <h6 className='mt-5'>Privacy</h6>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        label={
                            <span>
                                I have read the <Link to="/privacy" style={{ color: 'inherit' }} target="_blank">data protection information</Link>
                            </span>
                        }
                    />
                </Form.Group>
                <Button variant="info" className='bg-blue' type="submit">Register now </Button>
            </Form>

        </div>
    )
}
