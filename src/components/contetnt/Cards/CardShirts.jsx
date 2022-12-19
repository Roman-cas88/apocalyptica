import data from "./data.json"
import { Card } from 'react-bootstrap'
import "./cards.css"

export const CardShirts = ({ id }) => {
    let shirts = data.shirts[id]
    let clickedCard = () => {
      console.log("Clicked")
    }
    const SoldOut = () => {
      const sold = shirts.isSold
      if (sold)  {return (
        <div className="soldOut">Sold Out</div>
      )}
    }

    // Need to tune CSS or BS
    return (
        <Card style={{ width: '15rem', height:'20rem', textAlign:'center',cursor:"pointer" }} onClick={clickedCard}>
          <Card.Img style={{position:"relative"}} variant="top" src={shirts.img} />
          <SoldOut />
          <Card.Body>
            <Card.Title style={{fontSize: "15px", fontWeight:"lighter"}}>{shirts.title}</Card.Title>
            <Card.Text className="mt-3" style={{fontWeight:"bold"}}>{shirts.price}</Card.Text>
          </Card.Body>
        </Card>
      )
}