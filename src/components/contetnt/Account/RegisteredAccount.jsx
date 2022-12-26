import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap/";

export function RegisteredAccount(props) {
  return (
    <div>
      <Form className='border p-3 mb-5'>
        <h6>I'm already a customer.</h6>
        <hr />
        <p>Log in with your email address and password</p>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control required type="email" placeholder="Your email address*" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control required type="password" placeholder="Your password*" />
        </Form.Group>

        <p>Forgot your password?</p>
        <Button variant="info" className='bg-blue' type="submit">Login </Button>
      </Form>
      <h6>My benefits</h6>
      <ul>
        <li>Express Shopping</li>
        <li>Save your user data and settings</li>
        <li>Overview of your orders incl. shipping informations</li>
        <li>Wishlist</li>
      </ul>
    </div>
  )
}


