import React ,{ useState, useEffect } from 'react';
import LoadingScreen from 'react-loading-screen'


const Landing: React.FC<any> = (props:any): JSX.Element =>{
    const {setFlag,flag} = props;



    return (
        <LoadingScreen loading={true} bgColor={'#f1f1f1'}
                       spinnerColor={'#9ee5f8'} textColor={'#676767'} text={"please wait"}  />
    )
};
export default Landing;