import React ,{ useState, useEffect } from 'react';
import './landing.css';


const Landing: React.FC<any> = (props:any): JSX.Element =>{
    const {setFlag,flag} = props;



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
                    <br />
                    <button className={"btn btn-secondary mt-1"} onClick={()=>setFlag(true)}>이동하기</button>
                </div>
            </div>
        </>
    )
};
export default Landing;