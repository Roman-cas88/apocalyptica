import { Carousel, Col, Container, Row } from "react-bootstrap"
import TeaserCoffee from "../img/teaser-coffee-1200x400.jpg"
import NewMerch1200x400 from "../img/newMerch-1200x400.jpg"
import { Link } from "react-router-dom"


export const Home = () => {
    let styleCol = {display:"flex"}
    return ( 
        <Container>
            <h2>Home</h2>

            {/* Need to do adaptive */}
            <Carousel indicators={false} className="mb-5">
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

            {/* Need to do adaptive */}
            <Container className="mt-5 mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="2" style={styleCol}>
                        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/76/57/69/Trust_Icon_Versichert.svg" alt="delivery" /> 
                        <span style={{marginLeft:"2em", color: "#8B8684", fontSize:"10px"}}>
                        Versicherter {'\n'}Live Tracking bei allen Paketen</span> 
                        
                    </Col>
                    <Col xs lg="2" style={styleCol}>
                        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/45/47/40/Trust_Icon_Retoure1o5JLZUFb8Jbq.svg" alt="box" /> 
                        <span style={{marginLeft:"2em", color: "#8B8684", fontSize:"10px"}}>30 Tage Rückgaberecht</span> 
                    </Col>
                    <Col xs lg="2" style={styleCol}>
                        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/7a/83/a7/Trust_Icon_OrganicMPPfzamolVBe7.svg" alt="leaves"/>
                        <span style={{marginLeft:"2em", color: "#8B8684", fontSize:"10px"}}>Plastikfreie Verpackung</span>
                    </Col>
                    <Col xs lg="2" style={styleCol}>
                        <img src="https://d1lhyycl5p8pom.cloudfront.net/media/vector/7f/5f/9a/Trust_Icon_GoGreen6t50OL5J9a2Vt.svg" alt="wheelbarrow"/> 
                        <span style={{marginLeft:"2em", color: "#8B8684", fontSize:"10px"}}>Klimaneutraler Versand{'\n'}mit DHL GoGreen</span>
                    </Col>
                </Row>
            </Container>
            <div style={{width: "100%", height: "125px", backgroundColor: "grey", margin: "20px 0"}}></div>
        </Container>
    )
}