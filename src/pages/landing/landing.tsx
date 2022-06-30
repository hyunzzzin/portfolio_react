import React ,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

const Landing: React.FC<any> = (props:any): JSX.Element =>{
    const {setFlag} = props;
    return (
        <>
            <Button onClick={()=>{setFlag(true)}}>
                포트폴리오 보러가기
            </Button>
        </>
    )
};
export default Landing;