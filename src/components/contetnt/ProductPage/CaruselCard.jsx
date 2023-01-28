import React from 'react'

export const CaruselCard = ({ item }) => {
  return (
    <div style={{height:"300px"}} className='border pb-3 m-2 mb-4 text-center d-flex flex-column align-items-center' id='container'>
        <div className='m-2' id='img'>
            <img width="100%" src={item.img} alt={item.title} />
        </div>
        <div className='mt-auto '>
            <div className='fw-light' id='title'>{item.title}</div>
            <div className='fw-bold' id='price'>€{item.price.toFixed(2)}</div>
        </div>
    </div>
  )
}
