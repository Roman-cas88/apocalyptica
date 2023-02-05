import React from 'react';
import { Container } from 'react-bootstrap';
import data from "../Cards/data.json";
import Carousel from 'react-multi-carousel';
import { CaruselCard } from '../ProductPage/CaruselCard';

export const СarouselTopseller = () => {
    const { girls } = data;
    const { ticket } = data;
    const { shirts } = data;
    const { hoods } = data;
    const { stuff } = data;
    // const  allProducts = [...girls,...ticket,...shirts,...hoods,...stuff];
    // const topProducts = [girls[0], ticket[0], shirts[1], hoods[0],stuff[0], ticket[1], shirts[4],stuff[1] , ticket[2], shirts[5], stuff[2]];

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
            <h5>TOPSELLER</h5>
            <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        partialVisible
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            partialVisibilityGutter: 30
            },
            tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 3,
                partialVisibilityGutter: 30
                },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            }

        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
            {productMap}
        </Carousel>

        </Container>
    )
}