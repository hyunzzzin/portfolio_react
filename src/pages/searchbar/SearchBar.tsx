import React from "react";
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../common/Sidebar'

const SearchBar: React.FC<any> = (): JSX.Element =>{

    return (
        <>
            <div className="input-group mb-3">
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">검색엔진
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
            </div>
        </>
    )
}

export default SearchBar;