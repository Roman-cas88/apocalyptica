import { Container, Row } from "react-bootstrap"
import { Cards } from "../Cards/Card"


import data from "../Cards/data.json"


export const Tickets = () => {
     const { eTicket } = data

    return (
        <>
            <h2>Tickets</h2>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-3">
                    {eTicket.map((card) => (
                        <Cards card={card} />
                    ))}
                </Row>
            </Container>
    </>

    )
}