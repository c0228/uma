import React, { useState, useEffect } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { getForm, FORM_SUBMITTED, FORM_RESET } from './../Form/index.js';
import { FormInputValidate } from './../../Utils/Validations.js';
import { FormStyles } from './../form-styles.js';

export const Email =({ name, value, validation, disabled })=>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ? '' : value );
 const [emailValue, setEmailValue] = useState( initialValue );
 
 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;
 
useEffect(()=>{
  emailValidations(emailValue);
},[]);

useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setEmailValue(initialValue);
  }
},[FormMode]);

 // Validations
 const emailValidations = async(email)=>{
  let result={ value: email };
    if (validation !== undefined) {
        result = await FormInputValidate(validation, email); 
        console.log(result);
       // setValidationStatus(result);
    }
    // form Data
    if(formName!==undefined && form?.[formName]!==undefined){
      formContext?.setForm(formName, { [name]: result });
    }
 };

 const onEmailUpdate=(email)=>{
    setEmailValue(email);
    emailValidations(email);
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || emailValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);
 const labelStyles = (validateOnSubmit)?
                            (isErrorMessageExist?[FormStyles.formLabel,FormStyles.formLabelInvalid]:
                                        [FormStyles.formLabel,FormStyles.formLabelValid]):
                            (FormStyles.formLabel);
 const textInputStyles = (validateOnSubmit)?
                                (isErrorMessageExist?[FormStyles.formControl,FormStyles.formControlInvalid]:
                                        [FormStyles.formControl,FormStyles.formControlValid]):
                                (FormStyles.formControl);
 return (<>
 <Text style={labelStyles}>Email Address :</Text>
      <TextInput placeholder="Enter Email Address"
        placeholderTextColor="#777"
        value={emailValue}
        editable={!disabled}
        onChangeText={text =>onEmailUpdate(text)}
        style={[textInputStyles, disabled && FormStyles.formDisabledInput]} />
    {(validateOnSubmit && isErrorMessageExist) &&
        <Text style={FormStyles.formFeedbackInvalid}>
          {FormErrorMessage}
        </Text>}
 </>);
};

const styles = StyleSheet.create({
});