import { useParams } from 'react-router-dom'
import { Button, Container, Form, Col, Row, Stack, Table,  } from "react-bootstrap"
import data from "../Cards/data.json"


export const ProductPage = () => {
    let params = useParams()
    console.log(params)
    // need fix search product
    let { shirts } = data
    let product = shirts.find(id => id.id === params.id)
    const CheckDescription = () => {
        if (product.description) {
            return (
            product.description.map((des) => (
                <tr>
                    <th>{des.key}</th>
                    <td>{des.value}</td>
                </tr>
            ))
            )
        }}
        
   

    return        (
         <Container>
            <Row>
                <Col>
                    <img width="400px" src={product.img} alt={product.title} />
                </Col>
                <Col>
                    <p>Apocaliptica</p>
                    <h2>{product.title}</h2>
                    <h2>€{product.price.toFixed(2)} *</h2>
                    <h6>*incl. VAT <a href="#">plus shipping costs</a></h6>
                    <ul style={{color:"#2ECC71"}}>
                        <li> In stock | 3 - 4 business days</li>
                    </ul>
                    <Form>
                        <Form.Group className='mt-4'>
                            <Form.Label>Color:</Form.Label>
                            <Form.Select id="disabledSelect">
                                <option>schwarz</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mt-4'>
                            <Form.Label>Größe:</Form.Label>
                            <Form.Select id="size">
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </Form.Select>
                        </Form.Group>

                        <Row className='mt-4'>
                        <Col>
                        <Form.Group>
                            
                            <Form.Select id="quantity" className="fw-bold">
                                <option>1</option> 
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col>
                                <Button className="w-100">ADD TO CARD</Button>
                            </Col>
                        
                        </Row>

                        <hr />
                        <Stack direction='horizontal' gap={2}>
                        <h5>Order number: </h5>
                        <h5 className='mx-auto fw-light'>{product.id}</h5>
                        </Stack>                        
                    </Form>
                </Col>
            </Row>
            <Container>
            <form>
                <fieldset>
                    <legend>Description</legend>
                    <Table striped bordered hover >
                        <div className='fw-bold mb-3'>
                            Product information "{product.title}"
                        </div>
                        <tbody>
                            <CheckDescription />
                        </tbody>
                    </Table>
                </fieldset>
            </form>
            </Container>
    
        </Container>
    )
    
}