import { Container, Row, Col } from "react-bootstrap"
import { Cards } from "../Cards/Card"
import data from "../Cards/data.json"

export const Girls = () => {
    const { girls } = data

    return (
        <>
            <h2>Girls</h2>
            <Container>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-3">
                    {girls.map((card) => (
                        <Col key={card.id}>
                            <Cards card={card} />
                        </Col>
                    ))}
                    </Row>
            </Container>
        </>
    )

}