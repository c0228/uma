import React, { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const LogoutButton = () => {
    const navigation = useNavigation();
    const resetData = async() =>{
      let userDetails = await getFromSPStore("USER_DETAILS");
      delete userDetails.accountInfo;
      console.log("userDetails [Logout]: ", userDetails);
      await AddToSPStore("USER_DETAILS", userDetails);
      navigation.navigate('SS_Preset');
    };
    useEffect(()=>{
      resetData(); // Reset User Details to Empty over here
    });
    return (<></>); // Replace Button with your UI component
};

export default LogoutButton;