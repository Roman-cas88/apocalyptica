import React from 'react'
import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import { RegisteredAccount } from './RegisteredAccount';
import { NewAccount } from './NewAccount'

export const Account = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <RegisteredAccount />
                </Col>
                <Col>
                    <NewAccount />
                </Col>
            </Row>
        </Container>
    )
}


