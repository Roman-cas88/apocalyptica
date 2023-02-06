//https://www.npmjs.com/package/react-multi-carousel
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
import React from 'react';
import Carousel from 'react-multi-carousel';
 import "react-multi-carousel/lib/styles.css";

export const ProductCarousel = ({content}) => {
    const responsive = {
        largerDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5,
            },
         desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            },
            laptop: {
                breakpoint: {
                    max: 1024,
                    min: 768
                },
                items: 3,
            },
            tablet: {
                breakpoint: {
                    max: 768,
                    min: 464
                },
                items: 2,
                },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            }
    }

    return(
        <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        //  partialVisible 
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
            {content}
        </Carousel>
    )

}