import React from 'react';
import { Container } from 'react-bootstrap';
import data from "../Cards/data.json";
// import Carousel from 'react-multi-carousel';
import { CaruselCard } from '../ProductPage/CaruselCard';
import { ProductCarousel } from './ProductCarousel'


export const СarouselTopseller = () => {
    // const { girls } = data;
    // const { ticket } = data;
    // const { shirts } = data;
    // const { hoods } = data;
    // const { stuff } = data;
    const { girls, ticket, shirts, hoods, stuff } = data;


    let topProducts =[]
       for (let i=0; i<6; i++) {
        if(typeof(girls[i]) !=="undefined"){
         if(!girls[i].isSold) {
             topProducts.push(girls[i])
         }}
         if(typeof(ticket[i]) !=="undefined"){
        if(!ticket[i].isSold) {
            topProducts.push(ticket[i])
        }}
        if(typeof(shirts[i]) !=="undefined"){
         if(!shirts[i].isSold) {
             topProducts.push(shirts[i])
        }}
        if(typeof(hoods[i]) !=="undefined"){
        if(!hoods[i].isSold) {
            topProducts.push(hoods[i])
        }}
        if(typeof(stuff[i]) !=="undefined"){
        if(!stuff[i].isSold) {
            topProducts.push(stuff[i])
        }}
      }

     let productMap = topProducts.map((item) => (
        <CaruselCard item={item} key={item.id} />
     ))


    return (
        <Container>
            <div className = "p-2 fs-5 fw-bold">TOPSELLER</div>
            <ProductCarousel content={productMap}/>

        </Container>
    )
}