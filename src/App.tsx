import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing/landing'
import Header from './pages/header/header'
function App() {
  const [ flag , setFlag ] = useState(false)
    console.log(flag);


  return (
    <>
      <Header />
    </>
  );
}

export default App;
