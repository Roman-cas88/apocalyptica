import { Container, Row, Col } from "react-bootstrap"
import { Cards } from "../Cards/Card"


import data from "../Cards/data.json"


export const Tickets = () => {
     const { ticket } = data

    return (
        <>
        <Container fluid>
        </Container>
            <h2>Tickets</h2>
            <Container>
            <Row >

            </Row>
                <Row xs={1} md={2} lg={3} xl={4} className="g-3">
                    {ticket.map((card) => (
                        <Col key={card.id}>
                            <Cards card={card} />
                        </Col>
                    ))}
                </Row>
            </Container>
    </>

    )
}