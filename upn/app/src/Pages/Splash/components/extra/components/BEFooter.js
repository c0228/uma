import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@AppFormElement/Button/index.js';


const BEFooter = ({ label, previousForm, nextForm }) =>{
 return (<View style={{  paddingLeft: 20, paddingBottom: 10, paddingRight:20, paddingTop:10 }}>
    <View style={{ flexDirection:'row' }}>
        <View style={{ width:'30%'}}>
           {label?.previous && (<Button type="outline-danger" size={14} onPress={()=>previousForm()}>{label?.previous}</Button>)}
        </View>
        <View style={{ width:'40%'}}>

        </View>
        <View style={{ width:'30%'}}>
            <Button type="danger" size={14} onPress={()=>nextForm()}>{label?.next}</Button>
        </View>
      </View>
    </View>);
};

export default BEFooter;