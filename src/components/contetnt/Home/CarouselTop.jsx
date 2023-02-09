import { Carousel } from "react-bootstrap"
import TeaserCoffee from "../img/teaser-coffee-1200x400.jpg"
import NewMerch1200x400 from "../img/newMerch-1200x400.jpg"
import { Link } from "react-router-dom"



export const CarouselTop = () => {
    return (
        <Carousel indicators={false}>
                <Carousel.Item>
                    <a 
                    href="https://en.helsinginkahvipaahtimo.fi/product/72/"
                    title="kaffee">
                        <img
                            className="d-block w-100"
                            src={TeaserCoffee}
                            alt="helsinginkahvipaahtimo.fi"
                        />
                    </a>
                </Carousel.Item>

                <Carousel.Item>
                    <Link to="/shirts">
                        <img
                        className="d-block w-100"
                        src={NewMerch1200x400}
                        alt="New Merch"
                    />
                    </Link>
                </Carousel.Item>
            </Carousel>
    )
}