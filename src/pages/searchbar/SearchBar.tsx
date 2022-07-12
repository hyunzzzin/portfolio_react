import React ,{ useState } from "react";
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../../common/Sidebar';
import toastr from 'toastr'

const SearchBar: React.FC<any> = (): JSX.Element =>{
    const [ searchFlag , setSearchFlag ] = useState('')
    const [ searchText , setSearchText ] = useState('')
    //search handler
    const searchHandler = () =>{
        if(searchFlag === 'google') {
            window.open('https://www.google.com/search?q=' + searchText, '_blanks')
        } else if(searchFlag === 'naver'){
            window.open(' https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=' + searchText, '_blanks')
        }
    }

    return (
        <>
            <div className="input-group " >
                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">{searchFlag === '' ? '검색엔진' : searchFlag}
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={()=>{setSearchFlag('google')}}>Google</a></li>
                    <li><a className="dropdown-item" onClick={()=>{setSearchFlag('naver')}}>Naver</a></li>

                </ul>

                <input type="text" className="form-control" aria-label="Text input with dropdown button"
                       onChange={(e)=>{setSearchText(e.target.value)}}
                />
                <button className={"btn btn-primary"}
                        onClick={()=>{
                            searchHandler()
                        }}>검색</button>
            </div>
        </>
    )
}

export default SearchBar;