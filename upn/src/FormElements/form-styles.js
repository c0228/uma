import React from "react";
import { StyleSheet } from 'react-native';

export const FormStyles = StyleSheet.create({
    formLabel: { marginBottom: 5, fontWeight:'bold', color:'#333' },
    formLabelValid: { color:'#198754' },
    formLabelInvalid: { color:'#dc3545' },
    formControl: { borderWidth:1, borderColor:'#ccc', height:40, borderRadius:6, padding: 8, color:'#333'  },
    formControlValid: { borderColor: '#198754' },
    formControlInvalid:{ borderColor: '#dc3545' },
    formFeedbackInvalid:{ color:'#dc3545' },
    formFeedbackValid:{ color:'#198754' },
    formDisabledInput: { backgroundColor: '#f2f2f2' }
});