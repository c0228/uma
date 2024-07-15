import React, { useState, useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card, Switch, Button, Select, Icon } from "e-ui-react";
import Footer from '@Templates/Footer/index.js';
import './index.css';

const Products = () =>{

 const Title = ({ name })=>{
  return (<Row>
    <Col xs={12} xl={12} xxl={12}>
      <div className="mbot25p">
      <h3>{name}</h3><hr/>
      </div>
    </Col>
  </Row>);
 };

 const Images = ({ list })=>{
  return (<Row>
   {list?.map((l,i)=>{
    return (<Col key={i} xs={12} xl={4} xxl={4}>
      <img src={process.env.PROJECT_URL+"assets/products/"+l?.image} className="mbot25p" 
          style={{ borderRadius:'8px', boxShadow:'2px 2px 2px 2px #eee' }} />
      <div align="center"><h5 style={{ lineHeight:'24px' }}><b>{l?.title}</b></h5></div>
    </Col>);
   })}
  </Row>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="OurProjects" />
 <div style={{ marginTop:'35px' }}>
  <ContainerFluid>

  </ContainerFluid>
  <ContainerFluid>
    <div align="center"><h4 className="app-heading" style={{ marginBottom:'35px' }}><b>View Our Projects</b></h4></div>
    <Title name="Our Elevators" />
    <Images list={[{ image: "1.png", title:"Malakpet (G+4 MRL Auto Door)" },
      { image: "2.png", title:"Green Villas (G+2 Hydraulic with Iron Structure Glass Cladding)" },
      { image: "3.png", title:"Badanget (G+3 Auto Door Gear Lift with Touch LOP Cop)" },
      { image: "4.png", title:"Hafeezpet (MRL Auto Door G+6 with Semi Touch Buttons)" },
      { image: "5.png", title:"Kothapet (G+4 Swing Door)" }]}/>
    <div className="mtop35p mbot35p">
      <Title name="Our Electrical Installations" />
      <Images list={[{ image: "6.png", title:"Electrical Balcony Lighting at Incor Lake City Project" }]} />
    </div>
  </ContainerFluid>
 </div>
 <Footer />
 </>);
};

export default Products;