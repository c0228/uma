import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Switch } from 'react-native';
import Modal from '@AppComponent/Modal/index.js';
import { getFromSPStore, AddToSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const options = [{ id: 'en', placeholder:'A', label: 'English', value: 'en' },
  { id: 'hi', placeholder:'अ', label: 'हिन्दी', value: 'hi' }];

const Language = ({ value, handleSelect }) =>{
 const [modalVisible, setModalVisible] = useState(false);
 const [selectedOptions, setSelectedOptions] = useState();
 const toggleModal = async() => {
    setModalVisible(!modalVisible);
  };
 const toggleOption = async(option) => {
  const val = option.value;
  setSelectedOptions(val);
  handleSelect(val);
  setTimeout(async()=>{
    let details = await getFromSPStore('USER_DETAILS');
    await AddToSPStore('USER_DETAILS', {...details, lang: val });
    toggleModal();
  },400);
};
useEffect(()=>{
  setSelectedOptions( (value?.length>0) ? value : '' );
},[value]);

 return (<View>
    <TouchableOpacity onPress={toggleModal}>
        <Text style={{ padding:15, textAlign:'center', fontSize:18, color:'#fff', fontWeight:'bold', 
        width:35, height:35, borderWidth:1, borderRadius:6, borderColor:'#fff', padding:5 }}>
            {selectedOptions && options?.filter((opt)=>opt?.value===selectedOptions)?.[0]?.placeholder}
        </Text>
    </TouchableOpacity>
    <Modal title="Select Preferred Language" 
          visible={modalVisible} 
          onClose={(isVisible) => setModalVisible(isVisible)}>
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