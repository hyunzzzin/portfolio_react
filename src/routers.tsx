import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


import Main from './pages/main/main'
import Product from './pages/product/product'
import Header from './pages/header/header'

const Routers: React.FC<any> = (): JSX.Element => {
    console.log('1')

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/product" element={<Product />}/>
            </Routes>
        </Router>
    )
}

export { Routers };