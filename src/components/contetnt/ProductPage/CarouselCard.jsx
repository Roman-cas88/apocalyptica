import React from 'react'
import "../Cards/cards.css";
import { Link } from 'react-router-dom'

export const CarouselCard = ({ item }) => {

  return (
    <Link style={{all: 'unset', cursor: 'pointer'}} to={`/${item.name}/product-page/${item.id}`}>
    <div style={{maxWidth: "220px", height:"340px"}} className='border pb-3 m-2 mb-4 text-center d-flex flex-column align-items-center position-relative' id='container'>
        <div className='m-2' id='img'>
          {item.isSold &&
            <div className="soldOut">Sold Out</div>
          }
          <img width="100%" src={item.img} alt={item.title} />
        </div>
        <div className='mt-auto '>
            <div className='fw-light' id='title'>{item.title}</div>
            <div className='fw-bold' id='price'>€{item.price.toFixed(2)}</div>
        </div>
    </div>
    </Link> 
  )
}

//window.scroll(0,0)
