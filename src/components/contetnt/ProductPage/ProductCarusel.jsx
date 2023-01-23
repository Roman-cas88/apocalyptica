import React from 'react'
import { Container, Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useParams } from 'react-router-dom';
import data from "../Cards/data.json"


export const ProductCarusel = () => {
let params = useParams()
let productName = params.name
let product = data[productName]

let productMap = product.map((item) => (
    <Container key={item.id} onClick={() => console.log("54")}>
        <Card style={{ maxWidth: '12rem', height: '20rem'  }}>
            <Card.Img variant="top" src={item.img} alt={item.title} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
            </Card.Body>
        </Card>
    </Container>
))

  return (
    <Container>
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
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 3,
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
