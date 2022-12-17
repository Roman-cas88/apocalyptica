import data from "./data.json"
import { Card } from 'react-bootstrap'

export const CardTicket = ({ id }) => {
    let ticket = data.eTicket[id]
    let clickedCard = () => {
      console.log("Clicked")
    }
    return (
        <Card style={{ width: '15rem', textAlign:'center',cursor:"pointer" }} onClick={clickedCard}>
      <Card.Img variant="top" src={ticket.img} />
      <Card.Body>
        <Card.Title style={{fontSize: "15px", fontWeight:"lighter"}}>{ticket.title}</Card.Title>
        <Card.Text className="mt-3" style={{fontWeight:"bold"}}>{ticket.price}</Card.Text>
      </Card.Body>
    </Card>
    )
}