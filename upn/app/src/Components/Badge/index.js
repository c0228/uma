import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight  } from 'react-native';

export const Badge = ({ label, type, size }) => {
    let borderColor = '';
    let backgroundColor = '';
    let color = '';
  
    switch (type) {  
      case 'outline-secondary':
        borderColor = '#6c757d';
        backgroundColor = 'transparent';
        color = '#6c757d';
        break;
      case 'outline-success':
        borderColor = '#198754';
        backgroundColor = 'transparent';
        color = '#198754';
        break;
      case 'outline-danger':
        borderColor = '#dc3545';
        backgroundColor = 'transparent';
        color = '#dc3545';
        break;
      case 'outline-warning':
        borderColor = '#ffc107';
        backgroundColor = 'transparent';
        color = '#ffc107';
        break;
      case 'outline-info':
        borderColor = '#0dcaf0';
        backgroundColor = 'transparent';
        color = '#0dcaf0';
        break;
      case 'outline-dark':
        borderColor = '#212529';
        backgroundColor = 'transparent';
        color = '#212529';
        break;
      case 'outline-light':
        borderColor = '#f8f9fa';
        backgroundColor = 'transparent';
        color = '#f8f9fa';
        break;      
      case 'secondary':
        borderColor = '#6c757d';
        backgroundColor = '#6c757d';
        color = '#f8f9fa';
        break;
      case 'success':
        borderColor = '#198754';
        backgroundColor = '#198754';
        color = '#f8f9fa';
        break;
      case 'danger':
        borderColor = '#dc3545';
        backgroundColor = '#dc3545';
        color = '#f8f9fa';
        break;
      case 'warning':
        borderColor = '#ffc107';
        backgroundColor = '#ffc107';
        color = '#495057';
        break;
      case 'info':
        borderColor = '#0dcaf0';
        backgroundColor = '#0dcaf0';
        color = '#495057';
        break;
      case 'light':
        borderColor = '#f8f9fa';
        backgroundColor = '#f8f9fa';
        color = '#212529';
        break;
      case 'dark':
        borderColor = '#212529';
        backgroundColor = '#212529';
        color = '#f8f9fa';
        break;
      default:
        borderColor = '#0d6efd';
        backgroundColor = '#0d6efd';
        color = '#f8f9fa';
    }

    
  return (
        <Text>
            <View>
            <Text style={[styles.text, styles.badgeView, { 
              borderWidth: 1,
              borderRadius: 8,
              borderColor: borderColor,
              backgroundColor: backgroundColor, 
              color: color, 
              fontSize: size }]}>{label}</Text>
            </View>
        </Text>);
};

const styles = StyleSheet.create({
  badgeView:{
    marginBottom:5, marginRight:5,
    paddingTop: 5, paddingBottom: 5, paddingRight: 10, paddingLeft: 10, borderRadius: 4
  },
  text: {
    fontWeight:'bold' 
  },
});
