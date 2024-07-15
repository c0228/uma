import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight  } from 'react-native';

export const Badge = ({ label, type, size }) => {

    let backgroundColor = '';
    let color = '';
  
    switch (type) {        
      case 'secondary':
        backgroundColor = '#6c757d';
        color = '#f8f9fa';
        break;
      case 'success':
        backgroundColor = '#198754';
        color = '#f8f9fa';
        break;
      case 'danger':
        backgroundColor = '#dc3545';
        color = '#f8f9fa';
        break;
      case 'warning':
        backgroundColor = '#ffc107';
        color = '#495057';
        break;
      case 'info':
        backgroundColor = '#0dcaf0';
        color = '#495057';
        break;
      case 'light':
        backgroundColor = '#f8f9fa';
        color = '#212529';
        break;
      case 'dark':
        backgroundColor = '#212529';
        color = '#f8f9fa';
        break;
      default:
        backgroundColor = '#0d6efd';
        color = '#f8f9fa';
    }

    
  return (
        <Text>
            <View>
            <Text style={[styles.text, styles.badgeView, { backgroundColor: backgroundColor, color: color, fontSize: size }]}>{label}</Text>
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
