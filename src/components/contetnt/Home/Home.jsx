import { Container } from "react-bootstrap";
import { CaruselTop } from "./CaruselTop";
import { DeliveryInfo } from "./DeliveryInfo";
import { Guarantee } from "./Guarantee";
import NewMerch from "../img/newMerch-700x800.jpg";
import { Link } from 'react-router-dom';


export const Home = () => {
    return ( 
        <Container fluid className='bg-white p-0'>
            {/* <h2>Home</h2> */}
            <div className='d-none d-md-block my-0'>
            <CaruselTop />
            </div>
            <div className='d-md-none my-0'>
            <Link to='/shirts'>
            <img className="d-block w-100 " 
                            src={NewMerch}
                            alt="helsinginkahvipaahtimo.fi"
                        />
            </Link>
            </div>  
            <DeliveryInfo />
            <Guarantee />
        </Container>
    )
}