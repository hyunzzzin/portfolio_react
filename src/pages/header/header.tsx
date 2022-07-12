import React from "react";
import _ from 'lodash';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../common/Sidebar'
import SearchBar from '../searchbar/SearchBar'
const Header: React.FC<any> = (): JSX.Element =>{
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">안현진 포트폴리오</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <SearchBar />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                    </div>
                    <button className="btn btn-light rounded-pill" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#hamberger" aria-controls="offcanvasRight">
                        GOGO
                    </button>
                </div>
            </nav>
            <Sidebar />
        </>
    )
}

export default Header;