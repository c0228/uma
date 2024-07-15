import React, { useState } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Form, TextBox, TextArea, Button, Select, Card, Switch, FormToReqBodyFormatter, UrlAsyncFetch } from "e-ui-react";
import axios from 'axios';

const Quotation = ()=>{
 const [success, setSuccess] = useState(false);
 return (<>
 <Header menulinks={HeaderMenu} activeId="GetQuotation" />
 <div style={{ padding:'25px' }}>
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={10} xxl={10}>
            <div>
                <h4 style={{ fontFamily:'BebasNeue', letterSpacing:'2px' }}><b>Request a Quotation</b></h4><hr/>
            </div>
            {success && (<>
            <div style={{ padding:'15px' }}>
                We would like to inform you that we have successfully received your request for a quotation.<br/><br/> 
                Thank you for reaching out to us. Our team is currently reviewing the details provided in the form.
                Rest assured, we will diligently assess your requirements and prepare a comprehensive quotation tailored to your needs.
                Please expect to hear back from us within 24-48 hours with the requested information. In the meantime, if you have 
                any additional questions or specifications, feel free to reach out to us directly.
                Thank you for considering us for your [product/service] needs. We look forward to the opportunity to serve you.
            </div>
            </>)}
            {!success && (<>
            <div style={{ color:'#999', fontSize:'14px', marginTop:'10px' }}>
                Fill the Required Details below to get Free Quotation:
            </div>
            
            <Form name="quotationForm" 
 btnSubmit={{
    align: 'center',
    btnType:'primary',
    label:'Ask for Quotation',
    size: 11
}}
onSubmit={async(form, isValidForm, setFormMode)=>{
    if(isValidForm){  
        setSuccess(true);
        console.log("ForM VALUES");
        console.log(form);
        const reqBody = FormToReqBodyFormatter(form.quotationForm);
        console.log("reqBody", JSON.stringify(reqBody));
       await UrlAsyncFetch( process.env.NEXUS_URL + 'send/quotation', 'POST', reqBody );
    }
}}
>
            <Row>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quoteBy" label={<><span className="font-red">*</span>Name</>} placeholder="Enter your Name" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quoteEmail" label={<><span className="font-red">*</span>Email Address</>} placeholder="Enter your Email Address" />
                  </div>
                </Col>
                <Col xs={12} xl={4} xxl={4}>
                  <div className="mtop15p">
                    <TextBox name="quotePhone" label={<><span className="font-red">*</span>Phone Number</>} placeholder="Enter your Phone Number including (+91)" />
                  </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xl={12} xxl={12}>
                    <div className="mtop15p">
                        <TextArea name="quoteDesc" label="Your Message" placeholder="Enter your Message" lines={5} />
                    </div>
                </Col>
            </Row>
            </Form>
            </>)}  
        </Col>
        <Col xs={12} xl={6} xxl={6}>
        </Col>
            
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Quotation;