import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, FlatList, Switch, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getForm, FORM_SUBMITTED, FORM_RESET } from './../Form/index.js';
import { FormInputValidate } from './../../Utils/Validations.js';
import { FormStyles } from './../form-styles.js';
import Modal from '@AppComponent/Modal/index.js';

export const Select = ({ name, label, placeholder, value, validation, options, onSelect, multipleSelect, style }) => {
  const formContext = getForm();
  const formName = formContext?.name;
  const form = formContext?.form;

  const initialValue = Array.isArray(value) ? value : [];
  const [selectedOptions, setSelectedOptions] = useState(initialValue);

  const FormMode = form?.[formName]?.mode;
  const FormErrorMessage = form?.[formName]?.[name]?.errorMessage;

  useEffect(() => {
    if (FormMode === FORM_RESET) {
      setSelectedOptions(initialValue);
    }
    console.log("selectedOptions", selectedOptions);
  }, [FormMode]);

  useEffect(() => {
    onSelect(multipleSelect ? selectedOptions : selectedOptions[0]);
    SelectValidate();
  }, [selectedOptions]);

  const toggleOption = (option) => {
    console.log("toggleOption[Test]", option, multipleSelect);
  if(multipleSelect){
        // Check if the object exists in the array
const index = selectedOptions.findIndex(item => item === option.value);
const sOptions = [...selectedOptions];
if (index !== -1) {
  // Object exists, so remove it from the array
  sOptions.splice(index, 1);
  console.log("Object removed from array", selectedOptions);
} else {
  // Object doesn't exist, so add it to the array
  sOptions.push(option?.value);
  console.log("Object added to array", selectedOptions);
}
setSelectedOptions(sOptions);
  } else {
    setSelectedOptions([option?.value]);
    toggleModal();
  }

  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const SelectValidate = async () => {
    // validation
    console.log("SelectValidate ", selectedOptions);
    let result = { value: selectedOptions };
    if (validation !== undefined) {
      result = await FormInputValidate(validation, selectedOptions);
      console.log(result);
    }
    // form Data
    if (formName !== undefined && form?.[formName] !== undefined) {
      formContext?.setForm(formName, { [name]: result });
    }
  };

  const validateOnSubmit = ( (FormMode === FORM_SUBMITTED) || selectedOptions?.length > 0);
  const isErrorMessageExist = (FormErrorMessage?.length > 0);

  const labelStyles = (validateOnSubmit)?
                            (isErrorMessageExist?[FormStyles.formLabel,FormStyles.formLabelInvalid]:
                                        [FormStyles.formLabel,FormStyles.formLabelValid]):
                            (FormStyles.formLabel);
  const textInputStyles = (validateOnSubmit)?
                            (isErrorMessageExist?[FormStyles.formControl,FormStyles.formControlValid, style]:
                                    [FormStyles.formControl,FormStyles.formControlValid, style]):
                            ([FormStyles.formControl, style]);
 
  return (
    <View>
      {label && <Text style={labelStyles}>{label} :</Text>}
      <TouchableOpacity onPress={toggleModal}>
        <View style={[{ flexDirection:'row' }, textInputStyles]}>
        <Text style={{ width:'90%', lineHeight:22 }}>
          {(selectedOptions?.length>0)?
              (options?.filter(option =>selectedOptions.includes(option?.value)).map((res)=>res?.label).join(', ')):
              (placeholder)}
        </Text>
        <AntDesign name="down" size={16} color="#ccc"  style={{ width:'10%', paddingTop:3, textAlign:'right'}} />
        </View>
      </TouchableOpacity>
      <Modal title={placeholder} visible={modalVisible} onClose={(isVisible) => setModalVisible(isVisible)}>
        <ScrollView style={{ paddingLeft:10, marginBottom:5 }}>
          {options?.map((option, index)=>{
            return (<View key={index} style={{ flexDirection:'row', paddingBottom:5 }}>
              <Switch
                      value={selectedOptions.some((selected) => selected === option.value)}
                      onValueChange={() => toggleOption(option)} />
              <Text style={{ flex:1, fontSize: 15, lineHeight:22 }} onPress={()=>toggleOption(option)}>{option?.label}</Text>
            </View>);
          })}
          </ScrollView>
      </Modal>
      {FormErrorMessage?.length > 0 && <Text style={styles.errorMessage}>{FormErrorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: { color: 'red' },
});
