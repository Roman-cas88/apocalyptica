import { Col, Container, Row } from "react-bootstrap"
import { CardShirts } from "./Cards/CardShirts"


export const Shirts = () => {
    let num = [0, 1, 2, 3, 4, 5, 6, 7]
    let idList = num.map((id) => <Col><CardShirts id={id} /></Col>)
    return (
        <>
    <h2>Shirts</h2>
    <Container>
        <Row>
            {idList}
        </Row>
    </Container>
    </>
    )
}