import React,{ useContext } from 'react'
import { Container, Row, Col } from "react-bootstrap/";
import { RegisteredAccount } from './RegisteredAccount';
import { NewAccount } from './NewAccount'
// import { UserContext } from "./UserContext";

export const Account = () => {
// const user = useContext(UserContext)
// console.log('Account:',user)


    // return (
    //     <Container>
    //         {!user ?  <NewAccount /> : <RegisteredAccount />  }                            
    //     </Container>
    // )
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <RegisteredAccount />
                </Col>
                <Col>
                    <NewAccount />
                </Col>
            </Row>
        </Container>
    )
}


