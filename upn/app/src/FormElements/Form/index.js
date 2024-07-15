import React, { useState, useEffect, useCallback, useMemo, createContext as createFormContext, useContext as useForm } from "react";
import { View } from "react-native";
import { Button } from "./../Button/index.js";

const FormContext = createFormContext();

// Static Variables
export const FORM_SUBMITTED = 'SUBMITTED';
export const FORM_RESET = 'RESET';

export const getForm = ()=> useForm(FormContext);

export const Form = React.memo( ({ name, btnSubmit, btnReset, children, onSubmit, onReset }) =>{

  const [ form, updateForm ] = useState({[name]:{}});

  useEffect(()=>{
    setFormMode('INITIAL');
  },[]);
  
  const setForm = async(name, data) => {
    let d = { [name]: Object.assign(form[name], data) };
    // updateForm({ ...form, ...d });
    updateForm(d);
  };

  let afterSubmitted;
  const afterSubmit = useCallback(submit => {
    afterSubmitted = submit;
  }, []);
  
  const setFormMode = (status)=>{
    setForm(name, { mode : status }); // status = SUBMITTED / RESET 
  };

  const triggerReset = () =>{
    setFormMode(FORM_RESET);
    setTimeout(()=>setFormMode('INITIAL'), 1000);
  };

  const onSubmission = useCallback(async () => {
    setFormMode(FORM_SUBMITTED);
    if (onSubmit !== undefined) {
      const isValid = isErrorMessageEmpty(form[name]);
      onSubmit(form, isValid, triggerReset);
    }
    if (afterSubmitted !== undefined) {
      afterSubmitted();
    }
  }, [onSubmit, form, name, afterSubmitted]);
  


  const isErrorMessageEmpty = useMemo(() => form => {
    let keys = Object.keys(form);
    let status = true;
    for (let i = 0; i < keys.length; i++) {
      let errorMessage = form[keys[i]]?.errorMessage;
      if (errorMessage?.length > 0) {
        status = false;
        break;
      }
    }
    return status;
  }, []);
  
  
  useEffect(()=>{
    console.log("Form Values [Received]: ", form[name] );
  },[form]); 

  return (
    <FormContext.Provider value={{ name, form, setForm, afterSubmit }}>
        {children}
        <View style={{ paddingTop:'15px', justifyContent: btnSubmit?.align }}>
          <Button type={btnSubmit?.btnType} label={btnSubmit?.label} size={btnSubmit?.size} 
          onPress={()=>{
            onSubmission();
          }}/>
          {btnReset!==undefined && (<Button type={btnReset?.btnType} 
           label={btnReset?.label} size={btnReset?.size} onPress={()=>{
            triggerReset();
            if(onReset!==undefined){
              onReset();
            }
            }}  />)}
        </View>
    </FormContext.Provider>
  );
} );