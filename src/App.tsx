import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing/landing';
import Header from './pages/header/header';
import Main from './pages/main/main';
import Product from './pages/product/product';
import Toast from './pages/_components/toastr';
import { Routers } from './routers';

const App: React.FC<any> = (): JSX.Element => {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <Toast />
            <Header />
            {/*<Landing />*/}
            <Routers />
            {/*<Main />*/}
            {/*<Main />*/}
        </>
    );
};

export default App;
