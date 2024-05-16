import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@AppFormElement/Button/index.js';


const BEFooter = ({ previousForm, nextForm }) =>{
 return (<View style={{  paddingLeft: 20, paddingBottom: 10, paddingRight:20, paddingTop:10 }}>
    <View style={{ flexDirection:'row' }}>
        <View style={{ width:'30%'}}>
            <Button type="outline-danger" label="Previous" size={14} onPress={()=>previousForm()} />
        </View>
        <View style={{ width:'40%'}}>

        </View>
        <View style={{ width:'30%'}}>
            <Button type="danger" label="Next" size={14} onPress={()=>nextForm()} />
        </View>
      </View>
    </View>);
};

export default BEFooter;