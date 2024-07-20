import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '@AppUtils/ColorManagement.js';

const convertToKebabCase = (str) =>{
  return str.replace(/-([a-z])/g, (match, char) => char.toUpperCase());
};

export const Button =  ({ type, icon, label, size, onPress, style }) => {
  const fontSize = (size===undefined)?14:size;
  const typ = convertToKebabCase(type);
  // console.log("typ [Button]", typ);
  const data= {
    primary:{ bgColor: COLORS.DARK_BLUE, borderColor: COLORS.DARK_BLUE, color: COLORS.WHITE },
    secondary:{ bgColor: COLORS.MEDIUM_GREY, borderColor: COLORS.MEDIUM_GREY, color: COLORS.WHITE },
    success: { bgColor: COLORS.DARK_GREEN, borderColor: COLORS.DARK_GREEN, color: COLORS.WHITE },
    danger:{ bgColor: COLORS.DARK_RED, borderColor: COLORS.DARK_RED, color: COLORS.WHITE },
    warning:{ bgColor: COLORS.MEDIUM_YELLOW, borderColor: COLORS.MEDIUM_YELLOW, color: COLORS.DARK_BLACK },
    info:{ bgColor: COLORS.MEDIUM_SKYBLUE, borderColor: COLORS.MEDIUM_SKYBLUE, color: COLORS.MEDIUM_WHITE },
    dark:{ bgColor: COLORS.DARK_GREY, borderColor: COLORS.DARK_GREY, color: COLORS.WHITE },
    light:{ bgColor: COLORS.LIGHT, borderColor: COLORS.LIGHT, color: COLORS.DARK_BLACK },
    outlinePrimary:{ bgColor:'transparent', borderColor: COLORS.DARK_BLUE, color: COLORS.DARK_BLUE },
    outlineSecondary:{ bgColor:'transparent', borderColor: COLORS.MEDIUM_GREY, color: COLORS.MEDIUM_GREY },
    outlineSuccess:{ bgColor:'transparent', borderColor: COLORS.DARK_GREEN, color: COLORS.DARK_GREEN },
    outlineDanger:{ bgColor:'transparent', borderColor: COLORS.DARK_RED, color: COLORS.DARK_RED },
    outlineWarning:{ bgColor:'transparent', borderColor: COLORS.MEDIUM_YELLOW, color: COLORS.MEDIUM_YELLOW },
    outlineInfo:{ bgColor:'transparent', borderColor: COLORS.MEDIUM_SKYBLUE, color: COLORS.MEDIUM_SKYBLUE },
    outlineDark:{ bgColor:'transparent', borderColor: COLORS.DARK_GREY, color: COLORS.DARK_GREY },
    outlineLight:{ bgColor:'transparent', borderColor: COLORS.LIGHT, color: COLORS.LIGHT }
  };
    return (
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: data?.[typ]?.bgColor, borderWidth:1, 
        borderColor: data?.[typ]?.borderColor }, style]} onPress={onPress}>
          <View style={{ flexDirection:'row' }}>
        {(icon?.type==='FontAwesome5') && (<FontAwesome5 name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#000" style={icon?.style} />)}
        {(icon?.type==='FontAwesome6') && (<FontAwesome6 name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#000" style={icon?.style} />)}
        {(icon?.type==='Fontisto') && (<Fontisto name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#000" style={icon?.style} />)}
        {(icon?.type==='MaterialCommunityIcons') && (<MaterialCommunityIcons name={icon?.label} size={(icon?.size)?(icon?.size):12} color="#fff" style={icon?.style} />)}
        
        <Text style={[styles.button, { fontSize: fontSize, color: data?.[typ]?.color }]}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer:{ alignItems: 'center', justifyContent: 'center', borderRadius:5,  },
    button: { fontWeight:'bold', paddingLeft: 10, paddingRight:10, paddingTop:5, paddingBottom:8 },
});