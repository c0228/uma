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
              <TouchableOpacity style={{ position:'absolute', right:10, top:0 }} onPress={() => props?.onClose(false)}>
                <Fontisto name="close" size={20} color="#ccc" />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <ScrollView style={{ paddingBottom:15 }}>
                {props.children}
                </ScrollView>
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
      paddingTop:20,
      paddingLeft: 20,
      paddingBottom:20,
      marginTop:'10%',
      marginBottom:'10%'
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    content: {
      // Ensure the content area stretches
      flexDirection: 'row',
      paddingBottom: 30
      // flexWrap:'wrap'
    },
  });

export default Modal;