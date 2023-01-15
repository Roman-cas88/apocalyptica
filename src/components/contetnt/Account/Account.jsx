import React from 'react'
import { Container} from "react-bootstrap/";
import { NewAccount } from './NewAccount'

export const Account = () => {

    return (
        <Container>
            <NewAccount />                        
        </Container>
    )
    // return (
    //     <Container>
    //         <Row>
    //             <Col md={4}>
    //                 <RegisteredAccount />
    //             </Col>
    //             <Col>
    //                 <NewAccount />
    //             </Col>
    //         </Row>
    //     </Container>
    // )
}


