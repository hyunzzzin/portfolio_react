import React from "react";
import _ from 'lodash';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'


const Header: React.FC<any> = (): JSX.Element =>{
    const category = ['Introduce','Product','Board'];



    return (
        <>
            <Navbar bg="dark" variant="dark">
                <FontAwesomeIcon icon={faCode} className="logo"/>
                {/*<img className="logoImg" src={logo} />*/}
                <Navbar.Brand href="/home" className="title">안현진 포트폴리오</Navbar.Brand>
                    <Container>
                            <Col xs={10}>
                            <Nav className="me-auto header_category">
                                <>
                                {_.map(category,(el,i)=>{
                                    console.log(el)
                                    return (
                                        <>
                                            <Nav.Link href={'/'+el} key={i}>{el}</Nav.Link>
                                        </>
                                    )
                                })}
                                </>

                            </Nav>
                            </Col>
                    </Container>
            </Navbar>
        </>
    )
}

export default Header;