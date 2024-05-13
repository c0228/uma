import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const convertToKebabCase = (str) =>{
  return str.replace(/-([a-z])/g, (match, char) => char.toUpperCase());
};

export const Button =  ({ type, icon, label, size, onPress, style }) => {
  const fontSize = (size===undefined)?14:size;
  const typ = convertToKebabCase(type);
  const data= {
    primary:{ bgColor:'#007bff', borderColor:'#007bff', color:'#fff' },
    secondary:{ bgColor:'#6c757d', borderColor:'#6c757d', color:'#fff' },
    success: { bgColor:'#198754', borderColor:'#198754', color:'#fff' },
    danger:{ bgColor:'#dc3545', borderColor:'#dc3545', color:'#fff' },
    warning:{ bgColor:'#ffc107', borderColor:'#ffc107', color:'#000' },
    info:{ bgColor:'#0dcaf0', borderColor:'#0dcaf0', color:'#fefefe' },
    dark:{ bgColor:'#212529', borderColor:'#212529', color:'#fff' },
    light:{ bgColor:'#f8f9fa', borderColor:'#f8f9fa', color:'#000' },
    outlinePrimary:{ bgColor:'none', borderColor:'#007bff', color:'#007bff' },
    outlineSecondary:{ bgColor:'none', borderColor:'#6c757d', color:'#6c757d' },
    outlineSuccess:{ bgColor:'none', borderColor:'#198754', color:'#198754' },
    outlineDanger:{ bgColor:'none', borderColor:'#dc3545', color:'#dc3545' },
    outlineWarning:{ bgColor:'none', borderColor:'#ffc107', color:'#ffc107' },
    outlineInfo:{ bgColor:'none', borderColor:'#0dcaf0', color:'#0dcaf0' },
    outlineDark:{ bgColor:'none', borderColor:'#212529', color:'#212529' },
    outlineLight:{ bgColor:'none', borderColor:'#f8f9fa', color:'#f8f9fa' }
  };
    return (
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: data?.[typ]?.bgColor, borderWidth:1, 
        borderColor: data?.[typ]?.borderColor }, style]} onPress={onPress}>
          <View style={{ flexDirection:'row' }}>
        {(icon?.type==='FontAwesome5') && (<FontAwesome5 name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#fff" style={icon?.style} />)}
        {(icon?.type==='Fontisto') && (<Fontisto name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#fff" style={icon?.style} />)}
        {(icon?.type==='MaterialCommunityIcons') && (<MaterialCommunityIcons name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#fff" style={icon?.style} />)}
        
        <Text style={[styles.button, { fontSize: fontSize, color: data?.[typ]?.color }]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer:{ alignItems: 'center', justifyContent: 'center', borderRadius:5,  },
    button: { fontWeight:'bold', padding: 10 },
});