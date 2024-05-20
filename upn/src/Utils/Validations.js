import { RemoveItemsFromArray } from './ArrayManagement.js';
import axios from 'axios';
// const axios = require('axios');

export const FormToReqBodyFormatter = (form) =>{
  const requestBody = {};
  const keys = RemoveItemsFromArray(Object.keys(form), ['mode']);
  console.log("FormToReqBodyFormatter [keys]", keys);
  keys.map((k)=>{
      requestBody[k] = form[k]?.value;
  });
  return requestBody;
};
export const UrlAsyncFetch = async(url, method, requestBody=null)=>{
const response = await axios({
    url: url,
    method: method,
    data: requestBody,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
  console.log("response", url, method, requestBody, response);
  return response.data;       //api for the get request
};

export const FormPasswordValidation = (validation, value) =>{
   console.log("FormPasswordValidation", validation, value);
    const validationSteps = Object.keys(validation);
   // console.log("validationSteps",validationSteps);
    const validationSuccess = [];
    let result;
    let errorMessage =  [];
    for (let validateStep in validationSteps) {
      let pwdStatus = true;
      const step = validationSteps[validateStep];
      if(step === 'minLength') {
        if(value?.toString()?.trim().length < validation[step]?.value){
          errorMessage.push("MINLENGTH_FAILED"); 
        } else {
          validationSuccess.push(step);
        }
      }
      if(step === 'maxLength'){
        if(value?.toString()?.trim().length > validation[step]?.value) {
          errorMessage.push("MAXLENGTH_FAILED"); 
        } else {
          validationSuccess.push(step);
        }
      }

      if(step === 'passwordContains'){
        const passwordContains = validation[step];
        if(passwordContains.includes("Lowercase") && !/(?=.*[a-z])/.test(value)){ // lowerCaseValidation
            errorMessage.push("LOWERCASE_FAILED");  
            pwdStatus = false;
        }
        if(passwordContains.includes("Uppercase") && !/(?=.*[A-Z])/.test(value)){ // UpperCaseValidation
            errorMessage.push("UPPERCASE_FAILED");  
            pwdStatus = false;
        }
        if(passwordContains.includes("Number") && !/(?=.*\d)/.test(value)){ // NumberValidation
            errorMessage.push("NUMBER_FAILED");  
            pwdStatus = false;
        }
        if(passwordContains.includes("Symbol") && !/(?=.*\W)/.test(value)){ // SymbolValidation
            errorMessage.push("SYMBOL_FAILED"); 
            pwdStatus = false; 
        }
        if(pwdStatus) {
          validationSuccess.push(step);
        }
        result = { validationSuccess, value, errorMessage };
      }
    }
    // console.log('result', result);
    return result;
};

export const FormInputValidate = async(validation, value) => {
    console.log("FormInputValidate", validation, value);
    const validationSteps = Object.keys(validation);
    console.log("validationSteps",validationSteps);
    const validationSuccess = [];
    let result;
    for (let validateStep in validationSteps) {
      const step = validationSteps[validateStep];
      let errorMessage = '';
       if (step === 'validate') {
        const errorMessage = validation[step](value);
        if (errorMessage.length === 0) {
          validationSuccess.push(step);
        }
        result = { validationSuccess, value, errorMessage };
      } 
      else if(step === 'deps') {
 
      }
      else if(step === 'email') {
        let errorMessage='';
        if(validation[step]?.formatCheck){
          let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (value?.match(validRegex)) {
            let isEmailExist = validation[step]?.isEmailExist;
            if(isEmailExist!==undefined){
              let url = isEmailExist?.url;
              let method = isEmailExist?.method;
              let response = isEmailExist?.value;
              if(url!==undefined && method!==undefined && response!==undefined && errorMessage!==undefined){
                  const data = await UrlAsyncFetch(url, method, { email: value });
                  console.log("data!==response", data, response);
                  if(data?.trim() !== response.trim() ){
                    errorMessage =  isEmailExist?.errorMessage;
                  } 
                  result = { validationSuccess, value, errorMessage };
              }
            } else {
                result = { validationSuccess, value, errorMessage };
            }
          } else {
              // Not Matched
              errorMessage = "Please Enter a Valid Email Address";
              result = { validationSuccess, value, errorMessage };
          }
        }
      }
      else { 
        if (
          (step === 'required' && value?.toString()?.trim().length === 0) ||
          (step === 'minLength' && value?.toString()?.trim().length < validation[step]?.value) ||
          (step === 'pattern' && !validation[step]?.value?.test(value)) ||
          (step === 'maxLength' && value?.toString()?.trim().length > validation[step]?.value)
        ) {
          errorMessage = validation[step]?.errorMessage;
          result = { validationSuccess, value, errorMessage };
         // console.log("errorMessage: ", errorMessage);
          break;
        } else {
          validationSuccess.push(step);
          result = { validationSuccess, value, errorMessage };
        }
      }
    }
    console.log('result [final]', result);
    return result;
};

export const FormRangeValidate = async (validation, value) => {
  const validationSteps = Object.keys(validation);
  const validationSuccess = [];
  let errMessage = '';

  for (let validateStep of validationSteps) {
    const step = validation[validateStep];

    if (validateStep === 'required') {
      if (step.value && value <= 0) {
        errMessage = step.errorMessage;
        break;
      } else {
        validationSuccess.push(validateStep);
      }
    } else if (validateStep === 'range') {
      const { minValue, maxValue, errorMessage } = step;

      if (value < minValue || value > maxValue) {
        errMessage = errorMessage;
        break;
      } else {
        validationSuccess.push(validateStep);
      }
    }
  }

  const result = { validationSuccess, value, errorMessage: errMessage };
  return result;
};

export const FormFileValidate = async(validation, value) =>{
  const validationSteps = Object.keys(validation);
  const validationSuccess = [];
  let errMessage = '';

  for (let validateStep of validationSteps) {
    const step = validation[validateStep];

    if (validateStep === 'required') {
      if (step?.value && value?.length <= 0) {
        errMessage = step.errorMessage;
        break;
      } else {
        validationSuccess.push(validateStep);
      }
    }
  }

  const result = { validationSuccess, value, errorMessage: errMessage };
  return result;
};

export const FormSwitchValidate = async(type, validation, value )=>{ // value is an Array 
  const validationSteps = Object.keys(validation);
  const validationSuccess = [];
  let result;
  for (let validateStep in validationSteps) {
    const step = validationSteps[validateStep];
   // console.log("step: ",step);
    if (step === 'validate') {
      let errorMessage = [];
      if (errorMessage.length === 0) {
        validationSuccess.push(step);
      } else {
        errorMessage.push( validation[step](value) );
      }
    //  console.log("result2", result);
      result = { validationSuccess, value, errorMessage };
    } 
    else { 
      let errorMessage = [];
      if (
        (step === 'required' && value?.length === 0) ||
        (type === 'checkbox' && step === 'minSelect' && value?.length < validation[step]?.value) ||
        (type === 'checkbox' && step === 'maxSelect' && value?.length > validation[step]?.value)
      ) {
        errorMessage.push(validation[step]?.errorMessage);
        result = { validationSuccess, value, errorMessage };
       // console.log("validationSuccess", validationSuccess, "value", value, "errorMessage: ", errorMessage);
        break;
      } else {
        validationSuccess.push(step);
        result = { validationSuccess, value, errorMessage };
      }
    }
  }
  // console.log('result', result);
  return result;
};

export const KeyPressValidate=async(event, pattern, validation)=>{
    if(pattern!==undefined){
      let key = String.fromCharCode(event.which || event.charCode);
      if (!pattern.test(key)) {
       await FormInputValidate(validation, event.target.value + key);
       event.preventDefault();
      }
    }  
};

