import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./cards.css"

export const Cards = ({ card }) => {
    
    const SoldOut = () => {
      const sold = card.isSold
      if (sold)  {return (
        <div className="soldOut">Sold Out</div>
      )}
    }

    return (
      <Link style={{all: 'unset'}} to={`/${card.name}/product-page/${card.id}`}>
        <Card style={{ position:"relative", height:'24rem', textAlign:'center',cursor:"pointer" }}>
          <Card.Img style={{padding:"10px 30px"}} variant="top" width={250} height={250} src={card.img} alt={card.tittle} />
          <SoldOut />
          <Card.Body style={{position:"absolute", bottom: 0, width:"100%" }}>
            <Card.Title style={{fontWeight:"lighter"}}>{card.title}</Card.Title>
            <Card.Text className="mt-3" style={{fontWeight:"bold"}}>€{card.price.toFixed(2)} *</Card.Text>
          </Card.Body>
        </Card>
        </Link>    
      )
}