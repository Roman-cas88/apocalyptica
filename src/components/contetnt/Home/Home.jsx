import { Container } from "react-bootstrap"
import { CaruselTop } from "./CaruselTop"
import { DeliveryInfo } from "./DeliveryInfo"
import { Guarantee } from "./Guarantee"

export const Home = () => {
    return ( 
        <Container>
            <h2>Home</h2>
            <CaruselTop />
            <DeliveryInfo />
            <Guarantee />
        </Container>
    )
}