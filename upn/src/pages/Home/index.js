import React, { useState, useEffect } from "react";
import { Card, ContainerFluid, Row, Col, Icon, Button, Carousel } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import AboutUs from './Components/AboutUs/index.js';
import Features from './Components/Features/index.js';
import Services from './Components/Services/index.js';
import Process from './Components/Process/index.js';
import Footer from '@Templates/Footer/index.js';
import ManageSubjects from './Components/Dashboard/index.js';
import './index.css';

const Home = ()=>{
 const [fadeItems, setFadeItems] = useState("fade d-none");
 useEffect(()=>{
  document.title = 'Home | UPSCPrepNetwork';
  setTimeout(()=>setFadeItems("fade-in-right"),1000);
 },[]);


 return (<>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <div className="img-section" style={{
   backgroundColor:'#e53700' 
  // backgroundImage: "url('./assets/carousel/1.jpg')" 
  // backgroundImage: "url('./assets/images/welcome.jpg')" 
  }}>
    <div className="container-fluid">
      <div className="row">
        <div align="center" className="col-sm-4">
          <div style={{ padding:'15px', marginTop:'10px', marginBottom:'20px' }}>
            <img src="./assets/home/screen.png" style={{ width:'250px', height:'auto', transform: 'rotate(-5deg)' }} />
          </div>
        </div>
        <div className="col-sm-5">
            
           
        </div>
      </div>
    </div>
  {/*<div className="img-section-text">

    <h4 style={{ color:'#000', lineHeight:'26px' }}><b>"Powerful Electrical Solutions & Seamless Elevator Installations"</b></h4>
    <h5 style={{ color:'#000', lineHeight:'26px' }}>We partner with you to create a functional and efficient building environment.</h5>
  </div>*/}
 </div>
 <ManageSubjects /> 

 <AboutUs />
 <Features data={[{ 
                    icon:'fa-building',
                    title:'Elevating Efficiency: Building Electrical & Elevator Experts',
                    desc:'Need top-notch electrical wiring and reliable elevator systems for your construction project? Look no '
                        +'further! Our team of skilled professionals provides seamless electrical work and elevator installation tailored '
                        +'to your specific needs. Visit our website to discover how we bring power and ease of access to your building.'
                },{
                    icon:'fa-lightbulb-o',
                    title:'Building Brilliance: Electrical & Elevator Specialists',
                    desc:'Creating a brilliant building requires both a strong foundation and seamless functionality. We offer a complete package of '
                        +'building electrical works and elevator installation, ensuring your project shines from the inside out. Explore our website '
                        +'and discover how we power the brilliance of your construction.'
                },{ 
                    icon:'fa-plug', 
                    title:'Powering Up Your Project: Electrical & Elevator Solutions', 
                    desc:'Welcome to your one-stop shop for all things electrical and elevator! We specialize in building electrical '
                        +'works and elevator installations, ensuring your project runs smoothly and efficiently from the ground floor up. '
                        +'Explore our website to learn more about our comprehensive services.' 
                },{
                    icon:'fa-link',
                    title:'Your Building\'s Electrical & Elevator Partner',
                    desc:'Imagine a building where power flows effortlessly and connections are made on every level. That\'s the experience we '
                                +'deliver at Shudiksha Enterprises. Our website connects you with the expertise you need for flawless electrical works and '
                                +'elevator installation.'
                },
                ]}/>
 <Services />
 <Process />

 <section className="container-fluid mt-5 text-center" style={{ backgroundColor:'#5d607f', padding:'35px', color:'#fff' }}>
  <div align="center"><h4 className="app-heading"><b>Explore Our Expertise - View Our Projects</b></h4></div>
  <div className="fs14 mtop25p">We take pride in delivering exceptional electrical and elevator solutions. See a glimpse of our work to understand 
    how we can transform your building.</div>
  <a href="projects.html" className="btn btn-light mt-3"><b>View Our Projects</b></a>
</section>
<Footer />

 </>);
};

export default Home;