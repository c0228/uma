import React from "react";
import { View, Text } from "react-native";

const SuccessView = () =>{
 return (<View style={{ marginTop:25, marginBottom:15 }}>
   <Text style={{ textAlign:'center', marginBottom:5}}>
     Your OTP Code is verified &
   </Text>
   <Text style={{ textAlign:'center', marginBottom:5}}>
     Your Account was created successfully.
   </Text>
   <Text style={{ textAlign:'center', marginBottom:5}}>
   Please login into your Account.
   </Text>
</View>);
};

export default SuccessView;