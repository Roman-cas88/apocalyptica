import { Carousel, Container, Col, Row, Button } from "react-bootstrap"
import TeaserCoffee from "./img/teaser-coffee-1200x400.jpg"
import NewMerch1200x400 from "./img/newMerch-1200x400.jpg"
import { Link } from "react-router-dom"


export const Home = () => {
    return ( 
        <Container>
            <h2>Home</h2>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <a 
                    href="https://en.helsinginkahvipaahtimo.fi/product/72/"
                    title="kaffee">
                        <img
                            className="d-block w-100"
                            src={TeaserCoffee}
                            alt="helsinginkahvipaahtimo.fi"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to="/shirts">
                        <img
                        className="d-block w-100"
                        src={NewMerch1200x400}
                        alt="New Merch"
                    />
                    </Link>
                </Carousel.Item>
            </Carousel>
            <Emotion />
      </Container>
    )
}

const Emotion = () => {
    return [
        <Container>
            <Row mx-2 className="m-auto" style={{fontSize:"10px"}}>
                <Col lg p-1>   
                <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/76/57/69/Trust_Icon_Versichert.svg"></img>
                <span>Versicherter Versand<br/>Live Tracking bei allen Paketen</span>            
                </Col>
                <Col lg p-2>
                <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/45/47/40/Trust_Icon_Retoure1o5JLZUFb8Jbq.svg"></img>
                <span>30 Tage Rückgaberecht</span>
                </Col>
                <Col lg p-2>
                <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/7a/83/a7/Trust_Icon_OrganicMPPfzamolVBe7.svg"></img>
                <span>Plastikfreie Verpackung</span>
                </Col>
                <Col lg p-2>
                <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/7f/5f/9a/Trust_Icon_GoGreen6t50OL5J9a2Vt.svg"></img>
                <span>Klimaneutraler Versandmit DHL GoGreen</span>
                </Col>            
            </Row>
        </Container>
    ]
}