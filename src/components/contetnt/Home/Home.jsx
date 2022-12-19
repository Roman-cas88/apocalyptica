import { Container } from "react-bootstrap"
import { CaruselTop } from "./CaruselTop"
import { DeliveryInfo } from "./DeliveryInfo"

export const Home = () => {
    return ( 
        <Container fluid>
            <h2>Home</h2>
            <CaruselTop />
            <DeliveryInfo />
        </Container>
    )
}