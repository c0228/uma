import React,  { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from "react-native";
import { getForm, FORM_SUBMITTED, FORM_RESET } from './../Form/index.js';
import { FormInputValidate } from '@AppUtils/Validations.js';
import { FormStyles } from './../form-styles.js';

export const TextBox = ({ name, label, width, placeholder, value, validation, disabled, onChange, multiline, numberOfLines }) =>{
 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ?'' : value );
 const [textBoxValue, setTextBoxValue] = useState(initialValue);
 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 const inputRef = useRef(null);
 
 useEffect(()=>{
   textBoxValidations(textBoxValue);
 },[textBoxValue]);

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setTextBoxValue(initialValue);
  }
},[FormMode]);

// Validations
 const textBoxValidations = async(value)=>{
  let result = { value: value };
  if (validation !== undefined) {
    result = await FormInputValidate(validation, value);
  }
      // form Data
      if(formName!==undefined && form?.[formName]!==undefined){
        formContext?.setForm(formName, { [name]: result });
      }

      if(onChange!==undefined) { 
        await onChange( result ); 
       /* if (inputRef.current) {
          inputRef.current.focus(); // Focus on the input element
        } */
      }
 };
  
 const onTextBoxUpdate=(textBoxValue)=>{
  setTextBoxValue(textBoxValue);
 };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || textBoxValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);
 const labelStyles = (validateOnSubmit)?
 (isErrorMessageExist?[FormStyles.formLabel,FormStyles.formLabelInvalid]:
             [FormStyles.formLabel,FormStyles.formLabelValid]):
 (FormStyles.formLabel);
const textInputStyles = (validateOnSubmit)?
     (isErrorMessageExist?[FormStyles.formControl,FormStyles.formControlInvalid]:
             [FormStyles.formControl,FormStyles.formControlValid]):
     (FormStyles.formControl);

const isMultiLine = (multiline) ? { height: (numberOfLines>1)?numberOfLines*25:38, textAlignVertical: 'top' }: { };

 return(<View>
  {label && <Text style={labelStyles}>{label} :</Text>}
  <TextInput 
        id={name} 
        name={name} 
        multiline={multiline}
        minHeight={20}
        numberOfLines={numberOfLines}
        value={textBoxValue}
        placeholder={placeholder} 
        placeholderTextColor="#777"
        editable={!disabled}
        onChangeText={text =>onTextBoxUpdate(text)}
        style={[textInputStyles, disabled && FormStyles.formDisabledInput, isMultiLine]} />
      {(validateOnSubmit && isErrorMessageExist) &&
        <Text style={FormStyles.formFeedbackInvalid}>
          {FormErrorMessage}
        </Text>}
</View>);
};