import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, Switch, StyleSheet } from 'react-native';
import { getForm, FORM_SUBMITTED, FORM_RESET } from './../Form/index.js';
import { FormInputValidate } from './../../Utils/Validations.js';
import { FormStyles } from './../form-styles.js';

export const Select = ({ name, label, placeholder, value, validation, options, onSelect, multipleSelect }) => {
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
                            (isErrorMessageExist?[FormStyles.formControl,FormStyles.formControlValid]:
                                    [FormStyles.formControl,FormStyles.formControlValid]):
                            (FormStyles.formControl);

  return (
    <View style={styles.container}>
      {label && <Text style={labelStyles}>{label} :</Text>}
      <TouchableOpacity onPress={toggleModal}>
        <Text style={textInputStyles}>
          {(selectedOptions?.length>0)?
              (options?.filter(option =>selectedOptions.includes(option?.value)).map((res)=>res?.label).join(', ')):
              (placeholder)}
        </Text>
      </TouchableOpacity>
      <Modal transparent={true} visible={modalVisible} onRequestClose={toggleModal}>
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={toggleModal}>
          <View style={styles.modalContent}>
            <Text style={{ marginBottom: 15, fontSize: 15 }}>{placeholder}</Text>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    toggleOption(item);
                  }}
                  style={styles.optionContainer}>
                  {multipleSelect ? (
                    <Switch
                      value={selectedOptions.some((selected) => selected === item.id)}
                      onValueChange={() => toggleOption(item)} />
                  ) : (
                    <View style={[styles.radioContainer, selectedOptions[0]?.id === item.id && styles.selectedRadio]} />
                  )}
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
      {FormErrorMessage?.length > 0 && <Text style={styles.errorMessage}>{FormErrorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContent: { width: '85%', backgroundColor: 'white', padding: 20, borderRadius: 10 },
  optionContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  radioContainer: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#888', marginRight: 10 },
  selectedRadio: { backgroundColor: '#007bff' },
  optionText: { fontSize: 16 },
  errorMessage: { color: 'red' },
});
