import { Col, Container, Row } from "react-bootstrap"
import { CardTicket } from "./CardTicket"


export const Tickets = () => {
    return (
        <>
    <h2>Tickets</h2>
    <Container>
        <Row>
            <Col><CardTicket id="0"/></Col>
            <Col><CardTicket id="1"/></Col>
            <Col><CardTicket id="2"/></Col>
            <Col><CardTicket id="3"/></Col>
            <Col><CardTicket id="4"/></Col>
            <Col><CardTicket id="5"/></Col>
            <Col><CardTicket id="6"/></Col>
            <Col><CardTicket id="7"/></Col>
        </Row>
    </Container>
    </>
    )
}