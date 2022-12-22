import { Button, Container, Form } from "react-bootstrap"
import data from "../Cards/data.json"

export const ShirtPage = () => {
    let { shirts } = data
    let productImg = "https://d1lhyycl5p8pom.cloudfront.net/media/image/d9/07/93/22-APO-tshirt-mayhem-black_600x600.jpg"
    let price = shirts[0].price
    return (
        <Container>
            <span>
                <img width="400px" src={productImg} alt={shirts.title} />
            </span>
            <span style={{ display: "inline-block" }}>
                    <p>Apocaliptica</p>
                    <h2>{shirts[0].title}</h2>
                    <h2>{price}</h2>
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
                            <span>
                            <Form.Select id="quantity" className="fw-bold mt-4">
                                <option>1</option> 
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Select>
                            </span>
                            <span>
                            <Button className="ps-5 pe-5 mt-3">ADD TO CARD</Button>
                            </span>
                        </Form.Group>
                    </Form>
            </span>
        </Container>
    )
}