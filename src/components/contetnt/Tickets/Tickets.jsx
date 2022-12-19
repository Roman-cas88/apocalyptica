import { Col, Container, Row } from "react-bootstrap"
import { CardTicket } from "../Cards/CardTicket"


export const Tickets = () => {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    let idList = num.map((id) => <Col><CardTicket id={id} /></Col>)
    return (
        <>
    <h2>Tickets</h2>
    <Container>
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
            {idList}
        </Row>
    </Container>
    </>
    )
}