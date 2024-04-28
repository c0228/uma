import React, { useState } from 'react';
import { View, Text, Modal as Mdl, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Modal = (props)=>{// { title, visible, onClose, fullScreen }
    const isFullScreen = props.fullScreen !== undefined && props.fullScreen;

    return (
      <Mdl transparent={true} visible={props.visible}>
        <View style={styles.modalBackground}>
          <View style={[styles.modalContainer, { width: isFullScreen ? '100%' : '80%' }]}>
            <View style={styles.header}>
              <Text style={styles.title}>{props.title}</Text>
              <TouchableOpacity style={{ position:'absolute', right:10, top:12 }} onPress={() => props?.onClose(false)}>
                <Fontisto name="close" size={20} color="#333" />
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
      paddingLeft: 16,
      paddingBottom:10,
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
      paddingLeft:10
      // flexWrap:'wrap'
    },
  });

export default Modal;