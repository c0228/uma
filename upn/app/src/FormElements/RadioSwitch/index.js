import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';

export const RadioSwitch = ({ label, options, value, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(); // Use null for initial state

  useEffect(()=>{
    setSelectedValue(value);
  },[value]);

  const handleOption = (value) => {
    let val = value;
    if(selectedValue===value){ val =''; }
    setSelectedValue(val);
    onSelect && onSelect(val); // Call onSelect if provided
  };

  const Option = ({ label, val }) =>{
    console.log("selectedValue ", selectedValue, "val ", val);
    return (<View style={{ width:'50%', flexDirection:'row', paddingTop:8 }}>
    <Switch value={(selectedValue && selectedValue === val)} onValueChange={() =>handleOption(val)} />
    <TouchableOpacity onPress={()=>handleOption(val)}>
      <Text style={{ color:'#333' }}>{label}</Text>
    </TouchableOpacity>
  </View>);
  };

  return (<View>
        <Text style={{ fontSize:15, fontWeight:'bold', color:'#333' }}>{label}</Text>
        <View style={{ display:'flex', flexWrap: 'wrap', flexDirection:'row' }}>
          {options.map((option, index) => (<Option key={index} label={option?.label} val={option?.value} />))}
        </View>
    </View>);
};
