import { Row, Col } from "react-bootstrap/";
import { Link } from 'react-router-dom'

export const SearchedItem = ({ item }) => {
    return (
        <Link style={{all: 'unset', cursor: 'pointer'}} to={`/${item.name}/product-page/${item.id}`}>
            <Row>
                <Col xs={2} >
                    <img src={item.img} width={50} height={50} alt={item.title}></img>
                </Col>
                <Col>
                    {item.title}
                </Col>
                <Col xs={3}>
                    {item.price.toFixed(2)}€*
                </Col>
            </Row>
            <hr className="my-0" />
        </Link> 
    )
}