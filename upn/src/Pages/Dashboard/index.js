import React, { useState } from "react";
import { View, Text, ScrollView , StyleSheet, TouchableOpacity } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';


const Dashboard = (props)=>{
   const [openModal, setOpenModal] = useState(false);
    return (<View>
      <HamburgerIcon {...props}/>
      <ScrollView style={{ padding:15 }}>
         <TouchableOpacity onPress={()=>{ setOpenModal(!openModal)}}>
         <Text style={{ fontSize:16, paddingBottom:6, fontWeight:'bold' }}>Dashboard</Text>
         </TouchableOpacity>
         {openModal && <Modal title="Indian Languages" visible={openModal}
          onClose={(isVisible) => setOpenModal(isVisible)}>
            <Text>Test Zone </Text>
         </Modal>}
      </ScrollView>
      </View>);
   };

const SyllabusStyle = StyleSheet.create({ 
   
});

export default Dashboard;