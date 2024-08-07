import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import md5 from 'md5';
import { ContainerFluid, Row, Col, Email, ConfirmPassword, Form, Switch, Alert, FormToReqBodyFormatter, 
   StopWatchTimer, 
   UrlAsyncFetch, getDiffTimeFromNow, TIMESTAMP_TZ_FORMAT, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';

const ChangePwd = () =>{
 const [ viewScreen, setViewScreen ] = useState('');
 const [ userDetails, setUserDetails ] = useState();
 const [ expiryValidate, setExpiryValidate ] = useState();
 const [alertMessage, setAlertMessage] = useState('');
 const { userInfo } = useParams();
 const checkExpiryValidity = (remainingHours, remainingMinutes, remainingSeconds)=>{
   console.log("remainingHours", remainingHours, "remainingMinutes", remainingMinutes, "remainingSeconds", remainingSeconds);
   if (remainingHours < 0 || remainingMinutes < 0) { setViewScreen('RESET_EXPIRY'); } 
   else { setViewScreen('RESET_FORM'); } 
 };
 useEffect(()=>{
  console.log("userInfo: ", atob(userInfo) );
  let details = atob(userInfo).
   replace(new RegExp('EmailAt'), '').
   replace(new RegExp('CustomerAt'), '').
   replace(new RegExp('ExpiryAt'), '').
   replace(new RegExp('TimezoneAt'), '').
   split("|");
   setUserDetails({
       email : details?.[0],
       customerId : details?.[1],
       expiryAt : details?.[2],
       timezone : details?.[3] 
   });
 },[userInfo]);
 useEffect(()=>{
   const expiryValidate = getDiffTimeFromNow( userDetails?.expiryAt, TIMESTAMP_TZ_FORMAT);
   setExpiryValidate(expiryValidate);
   checkExpiryValidity(expiryValidate?.remainingHours, expiryValidate?.remainingMinutes, expiryValidate?.remainingSeconds);
   
},[userDetails]);
 const AlertWarning = ()=>{
   return (<>
   {alertMessage?.length>0 && <Alert type="danger" show={true} body={<div>{alertMessage}</div>} />}
   </>);
};

const EmailAddress = ({ email })=>{
   return (<>
       <div className="mtop15p">
           <Email name="email" disabled={true} value={email} validation={{ email:{ formatCheck: true }}}/>
       </div>
   </>);
};

const AccPwdUpdate = ()=>{
   return (<>
       <ConfirmPassword name="accPwd" validation={{
       required:{
           value: true,
           errorMessage:"This is a Mandatory Field"
       },
       minLength:{
           value: 8,
           errorMessage:"Password should be greator than 8"
       },
       maxLength:{
           value: 16,
           errorMessage:"Message should be lessthan 16"
       },
       passwordContains:["Lowercase","Uppercase","Number", "Symbol"]
}} />
   </>);
};

 const AgreeTermsAndConditions = ()=>{
   return (<div className="mtop15p" style={{ color:'#777' }}>
       <Switch type="checkbox" id="agreeTermsAndConditions" name="agreeTermsAndConditions"
           value={[{ id:1, label:"I agree to the terms and conditions", value:"1"}]} 
           disabled={false} 
           validation={{
                       required:{
                           value: true,
                           errorMessage : "Please Select Terms and Conditions"
                       }
                   }} />
       <div>By updating my Account password, you agree to our terms and conditions and privacy policy.</div>
   </div>);
 };
 return (<>
   {/* */}
   <Header menulinks={[]} />
   {viewScreen === 'RESET_FORM' && (<>
       <ContainerFluid>
       <Row>
           <Col xxl={12} xl={12} md={12}>
               
           </Col>
       </Row>
       <Row>
           <Col xxl={4} xl={3} md={4}></Col>
           <Col xxl={4} xl={6} md={4}>
            <div style={{ marginTop:'40px' }}>
               <h4 className="bs-header"><b>Change Your Account Password</b></h4>
               <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                   Stay Protected ! Your Safety First : Please Reset Your Password
               </div>
               <Form name="ChangePasswordForm" btnSubmit={{
                       btnType:'primary',
                       label:'Reset your Account Password',
                       size: 11
                   }}
                   onSubmit={(form, isValidForm)=>{
                       console.log("Form values", form, isValidForm);
                       // Error Validation check
                       const agreeTermsAndConditionsErrorMessage = form["ChangePasswordForm"]?.["agreeTermsAndConditions"]?.errorMessage;
                       setAlertMessage(agreeTermsAndConditionsErrorMessage);

                       if(isValidForm){
                           const reqBody = FormToReqBodyFormatter(form.ChangePasswordForm);
                           reqBody.userId = userDetails?.customerId;
                           reqBody.accPwd = md5(reqBody.accPwd);
                           console.log("process.env.NEXUS_URL", process.env.NEXUS_URL);
                           UrlAsyncFetch( process.env.NEXUS_URL + 'user/update', 'POST', reqBody );
                           setViewScreen('RESET_SUCCESS');
                       }
                   }}>
                       <AlertWarning />
                       <EmailAddress email={userDetails?.email} />
                       <AccPwdUpdate />
                       <AgreeTermsAndConditions />
               </Form>
            </div>
           </Col>
           <Col xxl={4} xl={3} md={4}>
               <div align="right" style={{ marginTop:'20px', marginRight:'15px', fontSize:'12px', color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                   {"This Link expires in "}<br/>
                   {(expiryValidate?.remainingHours >= 0 || 
                   expiryValidate?.remainingMinutes >= 0 || 
                   expiryValidate?.remainingSeconds >=0) && 
                   <StopWatchTimer defHr={expiryValidate?.remainingHours} 
                       defMin={expiryValidate?.remainingMinutes} 
                       defSec={expiryValidate?.remainingSeconds} 
                       onTimerEnd={()=>setViewScreen('RESET_EXPIRY')} />}
               </div>
           </Col>
       </Row>
   </ContainerFluid>
   </>)}
   {viewScreen === 'RESET_SUCCESS' && (<>
       <ContainerFluid>
       <Row>
           <Col xxl={4} xl={3} md={4}></Col>
           <Col xxl={4} xl={6} md={4}>
               <div className="mtop15p mbot15p">
                   <h4 className="bs-header"><b>Your Account Password got updated Successfully</b></h4>
                   <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                       Success! Your account password has been successfully reset. You can now securely access your 
                       account with your new password. 
                   </div>
                   <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                       We value your privacy and take security seriously, which is why we encourage regular password updates. 
                       Remember to choose a strong and unique password to protect your account from unauthorized access. 
                       We recommend periodically changing your password to maintain optimal security.
                   </div>
                   <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                       If you have any further questions or concerns, please don't hesitate to reach out to our support team. 
                       Thank you for choosing our platform, and we are committed to providing you with a safe and seamless 
                       experience.
                   </div>
               </div>
           </Col>
           <Col xxl={4} xl={3} md={4}></Col>
       </Row>
   </ContainerFluid>
   </>)}
   {viewScreen === 'RESET_EXPIRY' && (<>
       <ContainerFluid>
           <Row>
               <Col xxl={4} xl={3} md={4}></Col>
               <Col xxl={4} xl={6} md={4}>
                   <div style={{ marginTop:'65px', marginBottom:'65px' }}>
                       <h4 className="bs-header"><b>Reset your Account Password Link has Expired</b></h4>
                       <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                           We're sorry, but it seems that the password reset form has expired. Don't worry, though!  
                       </div>
                       <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                           To regain access to your account, please initiate a password reset request again. You can do 
                           this by visiting the "Forgot Password" page and entering your email address associated with 
                           the account. We will promptly send you a new password reset link.
                       </div>
                       <div className="mtop15p mbot15p" style={{color: 'rgb(119, 119, 119)', fontWeight: 'bold' }}>
                           We appreciate your patience and understanding.  If you encounter any difficulties or have 
                           any questions, our support team is ready to assist you. Thank you for your understanding, 
                           and we apologize for any inconvenience caused.
                       </div>
                   </div>
               </Col>
               <Col xxl={4} xl={3} md={4}></Col>
           </Row>
       </ContainerFluid>
   </>)}
   {/* */}

{/*} <br/>
*/}
</>);
};

export default ChangePwd;