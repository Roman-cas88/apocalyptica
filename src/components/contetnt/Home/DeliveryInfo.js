import { Container, Row, Col } from "react-bootstrap"


export const DeliveryInfo = () => {
    let styleCol = {display:"flex"}
    return (
        // Need to do adaptive
        
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
    )
}