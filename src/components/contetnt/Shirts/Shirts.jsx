import { Container, Row } from "react-bootstrap"
import { Cards } from "../Cards/Card"
import data from "../Cards/data.json"



export const Shirts = () => {

const { shirts } = data

    return (
        <>
            <h2>Shirts</h2>
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-3">
                {shirts.map((card) => (
                    <Cards card={card} />
                ))}
                </Row>
            </Container>
        </>
    )
}