import React, { useState } from 'react';
import { View, Text, Modal as Mdl, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

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

const AlertModal = (props)=>{// { title, visible, onClose, fullScreen }
    const isFullScreen = props.fullScreen !== undefined && props.fullScreen;
    const typ=(props?.type)?(props?.type):'danger';
    return (
      <Mdl transparent={true} visible={props.visible}>
        <View style={styles.modalBackground}>
          <View style={[styles.modalContainer, { width: isFullScreen ? '100%' : '80%' }]}>
            <View style={[styles.header,{ backgroundColor: data?.[typ]?.bgColor }]}>
              <Text style={[styles.title, { color: data?.[typ]?.color }]}>{props.title}</Text>
              <TouchableOpacity style={{ position:'absolute', right:10, top:12 }} onPress={() => props?.onClose(false)}>
                <Fontisto name="close" size={20} color={data?.[typ]?.color} />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {props.children}
            </View>
          </View>
        </View>
      </Mdl>
    );
  };
  
  const styles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop:'10%',
      marginBottom:'10%'
    },
    header: {
      paddingTop:10,
      paddingLeft: 12,
      paddingBottom:10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      borderColor:'#eee',
      borderBottomWidth:1
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#333'
    },
    content: {
      // Ensure the content area stretches
      flexDirection: 'row',
      marginLeft:3, 
      marginRight: 5,
      marginBottom:5
    },
  });

export default AlertModal;