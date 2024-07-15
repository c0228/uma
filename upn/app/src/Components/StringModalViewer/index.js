import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Modal from '@AppComponent/Modal/index.js';

export const StringModalViewer = (props) =>{
    const [openModal, setOpenModal] = useState(false);
    return (<View>
       <TouchableOpacity onPress={()=>setOpenModal(true)}>
           <Text style={StringModalViewerStyles.hyperlink}>{props?.clickLabel}</Text>
       </TouchableOpacity>
       <Modal title={props?.modalTitle} visible={openModal}
       onClose={(isVisible) => setOpenModal(isVisible)}>
       {props?.children}
       </Modal>
       </View>);
  };
 
const StringModalViewerStyles = StyleSheet.create({ 
 hyperlink :{ color:'red', textDecorationLine:'underline', paddingTop:5, paddingBottom:5 },
});
 

