import React ,{ useState } from 'react';
import './landing.css';


const Landing: React.FC<any> = (props:any): JSX.Element =>{
    const {setFlag} = props;
    return (
        <>
            <div className="container">
                <div style={{display:'row'}}>
                    <div className="center spinner-grow" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <br />
                    <br />
                    <span>페이지를 불러오는 중..</span>
                </div>
            </div>
        </>
    )
};
export default Landing;