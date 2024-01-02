import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../components/pages/homePage/HomePage';


const Router = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
    </Routes>
   
   </BrowserRouter>
  )
}

export default Router