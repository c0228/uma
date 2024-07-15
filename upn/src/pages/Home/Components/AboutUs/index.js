import React from "react";
import './index.css';

const AboutUs = () =>{
    return ( <div className="mtop45p">
        <div align="center"><h4 className="app-heading"><b>ABOUT SHUDIKSHA ENTERPRISES</b></h4></div>
        <div className="container-fluid mtop35p">
            <div className="row">
                <div className="col-xxl-2 col-sm-2"></div>
                <div className="col-xxl-8 col-sm-8">
                    <div className="about-desc">
                    While there are a few companies using the name Shudiksha Enterprises, based on your interest in electrical 
                    installations and escalators, we'll assume you're referring to the Sudiksha Group, a well-established company 
                    headquartered in Hyderabad, India.
                    </div>
                </div>
                <div className="col-xxl-2 col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-xxl-1 col-sm-1"></div>
                <div className="col-xxl-5 col-sm-5 mtop25p">
                    <div align="center">
                        <h5 className="app-subheading"><b>Areas of Expertise</b></h5>
                    </div>
                    <div className="about-bullets">
                        <ul>
                            <li className="mbot15p"><b>Electrical Contracting and Consulting:</b> Sudiksha Group boasts a strong presence as a 
                            Class 1 Grade Electrical Contractor and Consultant. Their experience ensures they can deliver safe 
                            and high-quality electrical installations for your new buildings.</li>
                            <li><b>Diverse Business Segments:</b> Beyond electrical expertise, Sudiksha Group operates across 
                            various sectors, including Digital Media & Communications, Mobile Communications, Telecommunications 
                            Systems, and IT Solutions. This experience demonstrates their commitment to staying at the forefront 
                            of technology, potentially beneficial for integrating electrical systems with smart building 
                            technologies.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-5 col-sm-5" style={{ marginTop:'25px' }}>
                    <div align="center">
                        <h5 className="app-subheading"><b>Potential Benefits of Working with Shudiksha Enterprises</b></h5>
                    </div>
                    <div className="about-bullets">
                        <ul>
                            <li className="mbot15p"><b>One-Stop Shop:</b> Their experience in various domains allows them to potentially handle 
                            both electrical installations and escalator installation, streamlining your project coordination.</li>
                            <li className="mbot15p"><b>Safety and Quality:</b> Their Class 1 Grade Electrical Contractor certification signifies 
                            their commitment to safety standards and high-quality work.</li>
                            <li><b>Technology Integration:</b> Their experience in IT Solutions and potentially smart building 
                            technologies could be advantageous for integrating your electrical systems with modern building 
                            management solutions.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-1 col-sm-1"></div>
            </div>
        </div>
     </div>);
 };

 export default AboutUs;