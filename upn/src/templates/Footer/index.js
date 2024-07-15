import React from "react";
import { Link } from 'react-router-dom';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";

const Footer = ()=>{

 return ( <footer className="container-fluid text-center" style={{ borderTop:'1px solid #ddd' }}>
    <div style={{ padding:'10px' }}>&copy; 2024 Shudiksha Enterprises. All Rights Reserved.</div>
  </footer>);
};

export default Footer;