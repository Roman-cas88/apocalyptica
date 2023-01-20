import { Container, Row, Col } from "react-bootstrap"
import { Cards } from "../Cards/Card"
import data from "../Cards/data.json"

export const Hoods = () => {
    const { hoods } = data

    return (
        <>
            <h2>Hoods</h2>
            <Container>
                    <Row xs={2} md={2} lg={3} xl={4} className="g-3">
                    {hoods.map((card) => (
                        <Col key={card.id}>
                            <Cards card={card} />
                        </Col>
                    ))}
                    </Row>
            </Container>
        </>
    )

}