import { Button, Container, Form, Row, Col, Stack, Table } from "react-bootstrap"
import data from "../Cards/data.json"

// let params = useParams()
// let { shirts } = data
// console.log(params.id)
// console.log(shirts.id)
// let product = shirts.find(id => id.id === params.id)



export const ShirtPage = () => {
    let { shirts } = data
    let productImg = "https://d1lhyycl5p8pom.cloudfront.net/media/image/d9/07/93/22-APO-tshirt-mayhem-black_600x600.jpg"
    let price = shirts[0].price
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <img width="400px" src={productImg} alt={shirts.title} />
                </Col>
                <Col>
                    <p>Apocaliptica</p>
                    <h2>{shirts[0].title}</h2>
                    <h2>€{price} *</h2>
                    <h6>*incl. VAT <a href="#">plus shipping costs</a></h6>
                    <ul style={{color:"#2ECC71"}}>
                        <li> In stock | 3 - 4 business days</li>
                    </ul>
                    <Form>
                        <Form.Group>
                            <Form.Label>Color:</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>schwarz</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Größe:</Form.Label>
                            <Form.Select id="size">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group>
                            <Row  className="mt-4">
                                <Col>
                                    <Form.Select id="quantity" className="fw-bold">
                                        <option>1</option> 
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Select>
                                </Col>
                                <Col>
                                    <Button type="submit" className="w-100">ADD TO CARD</Button>
                                </Col>
                            </Row>
                        </Form.Group>
                        <hr />
                        <Stack direction="horizontal" gap={2}>
                            <h5>Order number:</h5>
                            <h5  className="mx-auto fw-light">{shirts[0].id}</h5>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Container>
            <form>
                <fieldset>
                    <legend>Description</legend>
                    <Table style={{maxWidth:'500px'}} striped bordered hover size="sm">
                        <thead >Product information {shirts[0].name}</thead>
                        <tbody>
                            <tr>
                                <th>Künstler*innen:</th>
                                <td>Apocalyptica</td>
                            </tr>
                            <tr>
                                <th>Produkttyp:</th>
                                <td>T-Shirt</td>
                            </tr>
                            <tr>
                                <th>Passform:</th>
                                <td>Regular Fit</td>
                            </tr>
                            <tr>
                                <th>Materialzusammensetzung::</th>
                                <td>100% Baumwolle in Bio-Qualität</td>
                            </tr>
                            <tr>
                                <th>Rohware:</th>
                                <td>Stanley/Stella</td>
                            </tr>
                            <tr>
                                <th>Veredelung:</th>
                                <td>Siebdruck</td>
                            </tr>
                            <tr>
                                <th>Pflegehinweise:</th>
                                <td>Maschinenwäsche bei 30°C, Mit ähnlichen Farben waschen</td>
                            </tr>
                        </tbody>
                    </Table>
                </fieldset>
            </form>
        </Container>
        </>
    )
}