import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView, Switch } from 'react-native';

const Language = ({ value, handleSelect }) =>{
 const options = [{ id: 'en', placeholder:'A', label: 'English', value: 'en' },
                { id: 'hi', placeholder:'अ', label: 'हिन्दी', value: 'hi' }];
 const [modalVisible, setModalVisible] = useState(false);
 const initialValue = (value?.length>0) ? value : '';
 const [selectedOptions, setSelectedOptions] = useState(initialValue);
 const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
 const toggleOption = (option) => {
  setSelectedOptions(option.value);
  toggleModal();
  handleSelect(option.value);
};

 return (<View>
    <TouchableOpacity onPress={toggleModal}>
        <Text style={{ textAlign:'center', fontSize:18, color:'#fff', fontWeight:'bold', 
        width:35, height:35, borderWidth:1, borderRadius:6, borderColor:'#fff', padding:5 }}>
            {options?.filter((opt)=>opt?.value===selectedOptions)?.[0]?.placeholder}
        </Text>
    </TouchableOpacity>
    <Modal title="Select Preferred Language" visible={modalVisible} onClose={(isVisible) => setModalVisible(isVisible)}>
        <ScrollView style={{ paddingLeft:10, marginBottom:5 }}>
          {options?.map((option, index)=>{
            return (<View key={index} style={{ flexDirection:'row', paddingBottom:5 }}>
              <Switch
                      value={selectedOptions === option.value}
                      onValueChange={() => toggleOption(option)} />
              <Text style={{ flex:1, fontSize: 15, lineHeight:22 }} onPress={()=>toggleOption(option)}>{option?.label}</Text>
            </View>);
          })}
          </ScrollView>
    </Modal>
 </View>);
};

export default Language;