import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import ChangePwd from "@Pages/ChangePwd/index.js";
import GetQuotation from "@Pages/Quotation/index.js";
import ManageBooks from "@Pages/ManageBooks/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/change-pwd/:userInfo" element={<ChangePwd />} />
         <Route exact path="/admin-dashboard" element={<ManageBooks />} />
         <Route exact path="/get-quotation" element={<GetQuotation />} />
       </Routes>
    </BrowserRouter>);
   };