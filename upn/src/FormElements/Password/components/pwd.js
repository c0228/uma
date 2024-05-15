import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from 'react-native';
import { Icon } from "e-ui-react";
import { FormPasswordValidation } from "@AppUtils/Validations.js";
import { getForm, FORM_SUBMITTED, FORM_RESET } from "@AppFormElement/Form/index.js";
import { FormStyles } from './../../form-styles.js';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Password = ({ name, type, label, value, placeholder, validation })=>{

 const formContext = getForm();
 const formName = formContext?.name;
 const form = formContext?.form;
 const initialValue = ( (value === undefined) ? '' : value );
 const [passwordValue, setPasswordValue] = useState( initialValue );
 const errMessage = form?.[formName]?.[name]?.errorMessage;
 const pwdNoMatch =  Array.isArray(errMessage) && (errMessage.includes('PASSWORD_NOT_MATCH') );
 const charValidated = Array.isArray(errMessage) && (!errMessage.includes('MINLENGTH_FAILED') && !errMessage.includes('MAXLENGTH_FAILED') );
 const lowerCaseValidation=Array.isArray(errMessage) && !errMessage.includes('LOWERCASE_FAILED');
 const upperCaseValidation=Array.isArray(errMessage) && !errMessage.includes('UPPERCASE_FAILED');
 const numberValidation=Array.isArray(errMessage) && !errMessage.includes('NUMBER_FAILED');
 const symbolValidation=Array.isArray(errMessage) && !errMessage.includes('SYMBOL_FAILED');

 const FormMode =  form?.[formName]?.mode;
 const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

 console.log("charValidated", charValidated);

 useEffect(()=>{
   passwordValidations(passwordValue);
  },[passwordValue]);

 useEffect(()=>{
  if( FormMode === FORM_RESET ){
    setPasswordValue(initialValue);
  }
 },[FormMode]);

   const passwordValidations = async(pwd)=>{
      let result = { value: pwd };
        if (validation !== undefined) {
            result = await FormPasswordValidation(validation, pwd);
        }
        console.log("result", name, result);
        // form Data
        if(formName!==undefined && form?.[formName]!==undefined){
         await formContext?.setForm(formName, { [name]: result });
        }
        console.log("form", form);
     };

  
   const onPasswordUpdate = (pwd)=>{
      setPasswordValue(pwd);
   };

 const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || passwordValue?.length > 0);
 const isErrorMessageExist = (FormErrorMessage?.length > 0);

 const labelStyles = (validateOnSubmit)?
 (isErrorMessageExist?[FormStyles.formLabel,FormStyles.formLabelInvalid]:
             [FormStyles.formLabel,FormStyles.formLabelValid]):
 (FormStyles.formLabel);

 const textInputStyles = (validateOnSubmit)?
 (isErrorMessageExist?[FormStyles.formControl,FormStyles.formControlInvalid]:
         [FormStyles.formControl,FormStyles.formControlValid]):
 (FormStyles.formControl);

 return (<View>
 <Text style={labelStyles}>{label}:</Text>

 <TextInput secureTextEntry={true} 
        placeholder={placeholder}
        placeholderTextColor="#777"
        value={passwordValue}
        onChangeText={text =>onPasswordUpdate(text)}
        style={[textInputStyles]} />


    {(type==='confirmPassword' && (passwordValue?.length>0) && (pwdNoMatch)) &&
        (<Text style={[FormStyles.formFeedbackInvalid]}>
          Password and Confirm Password doesn't match</Text>)
    }
     {(validation && validateOnSubmit  && isErrorMessageExist) && 
        (<View style={{ fontSize:'12px', fontWeight:'bold', padding:10 }}>
        <View style={{ padding:3, flexDirection:'row' }}>
            <FontAwesome5 name={(charValidated?'check-circle':'times-circle')} size={18} color={(charValidated?'green':'red')} />
            <Text style={{ paddingLeft: 8,  color:(charValidated?'green':'red')  }}>It should be in between 8-12 Characters</Text>
        </View>
        <View style={{ padding:3, flexDirection:'row'  }}>
            <FontAwesome5 name={(lowerCaseValidation?'check-circle':'times-circle')} size={18} color={(lowerCaseValidation?'green':'red')} />
            <Text style={{ paddingLeft: 8,  color:(lowerCaseValidation?'green':'red')  }}>It should contain a Lowercase</Text>
        </View>
        <View style={{ padding: 3, flexDirection:'row'  }}>
            <FontAwesome5 name={(upperCaseValidation?'check-circle':'times-circle')} size={18} color={(upperCaseValidation?'green':'red')} />
            <Text style={{ paddingLeft: 8,  color:(upperCaseValidation?'green':'red')  }}>It should contain a Uppercase</Text>
        </View>
        <View style={{ padding: 3, flexDirection:'row'  }}>
            <FontAwesome5 name={(numberValidation?'check-circle':'times-circle')} size={18} color={(numberValidation?'green':'red')} />
            <Text style={{ paddingLeft:8,  color:(numberValidation?'green':'red')  }}>It should contain a Number</Text>
        </View>
        <View style={{ padding: 3, flexDirection:'row'  }}>
            <FontAwesome5 name={(symbolValidation?'check-circle':'times-circle')} size={18} color={(symbolValidation?'green':'red')} />
            <Text style={{ paddingLeft: 8,  color:(symbolValidation?'green':'red')  }}>It should contain a Symbol</Text>
        </View>
     </View>)}
 </View>);

};
