import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./cards.css"

export const Cards = ({ card }) => {

    let clickedCard = () => {
    }
    
    const SoldOut = () => {
      const sold = card.isSold
      if (sold)  {return (
        <div className="soldOut">Sold Out</div>
      )}
    }

    return (
      <Link to={`/${card.name}/product-page/${card.id}`}>
        <Card style={{ width: '15rem', height:'21rem', textAlign:'center',cursor:"pointer" }} onClick={clickedCard}>
          <Card.Img style={{position:"relative"}} variant="top" src={card.img} />
          <SoldOut />
          <Card.Body>
            <Card.Title style={{fontSize: "15px", fontWeight:"lighter"}}>{card.title}</Card.Title>
            <Card.Text className="mt-3" style={{fontWeight:"bold"}}>€{card.price.toFixed(2)} *</Card.Text>
          </Card.Body>
        </Card>
        </Link>
      
      )
}