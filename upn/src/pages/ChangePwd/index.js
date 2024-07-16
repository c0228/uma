import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from '@Templates/Header/index.js';

const ChangePwd = () =>{
 const { userInfo } = useParams();
 useEffect(()=>{
  console.log("userInfo: ", userInfo);
 },[userInfo]);
 return (<div>
    <Header menulinks={[]} />
 </div>);
};

export default ChangePwd;