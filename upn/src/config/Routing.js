import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import GetQuotation from "@Pages/Quotation/index.js";
import Products from "@Pages/Products/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/our-projects" element={<Products />} />
         <Route exact path="/get-quotation" element={<GetQuotation />} />
       </Routes>
    </BrowserRouter>);
   };