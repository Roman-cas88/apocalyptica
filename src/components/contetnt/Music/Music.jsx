import { Container, Row, Col } from "react-bootstrap"
import { Cards } from "../Cards/Card"
import data from "../Cards/data.json"

export const Music = () => {
    const { music } = data

    return (
        <>
            <h2>Music</h2>
            <Container>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-3">
                    {music.map((card) => (
                        <Col key={card.id}>
                            <Cards card={card} />
                        </Col>
                    ))}
                    </Row>
            </Container>
        </>
    )
}