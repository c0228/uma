import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BEHeader, { HeaderTitle } from './../BEHeader.js';
import BEFooter from './../BEFooter.js';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';

const Avatar = () =>{
    const route = useRoute();
    const [userDetails, setUserDetails] = useState();
    const [selectedAvatar, setSelectedAvatar] = useState('');
    
    const [gender, setGender] = useState();
    const initialize = async() =>{
        const details = await getFromSPStore('USER_DETAILS'); 
        setUserDetails( details );
       // setGender(  );
    };
    useEffect(()=>{
        initialize();
    },[]);
    const images = {
        "Male":{
            "male-01": require("@Assets/avatar/male1.jpg"), 
            "male-02": require("@Assets/avatar/male2.jpg"), 
            "male-03": require("@Assets/avatar/male3.jpg"), 
            "male-04": require("@Assets/avatar/male4.jpg"),
            "male-05": require("@Assets/avatar/male5.jpg"), 
            "male-06": require("@Assets/avatar/male6.jpg"), 
            "male-07": require("@Assets/avatar/male7.jpg"), 
            "male-08": require("@Assets/avatar/male8.jpg")
        },
        "Female":{
            "female-01": require("@Assets/avatar/female1.jpg"), 
            "female-02": require("@Assets/avatar/female2.jpg"), 
            "female-03": require("@Assets/avatar/female3.jpg"), 
            "female-04": require("@Assets/avatar/female4.jpg"), 
            "female-05": require("@Assets/avatar/female5.jpg")
        }
    };
    const handleImageSelect = async(img) =>{
      setSelectedAvatar(img);
      await AddToSPStore('USER_DETAILS', );
    };
    const navigation = useNavigation();
    return (<View style={styles.avatarPage}>
        <BEHeader formSize={5} activeForm={0} />
        <HeaderTitle 
            title="Choose your Avatar" 
            subTitle="Please Select your Perfect Avatar for a Unique Social Media Experience -" />
        <ScrollView style={styles.scrollView}>
            <View style={styles.avatarView}>
                {userDetails?.accountInfo?.gender && Object.keys(images?.[userDetails?.accountInfo?.gender])?.map((img, index)=>{
                    return (<View key={index} style={{ padding:15 }}>
                        {img && <TouchableOpacity onPress={()=>handleImageSelect(img)}>
                            {selectedAvatar?.length>0 && (selectedAvatar===img) && 
                                (<View style={styles.selectView}>
                                    <FontAwesome5 name="check" size={12} color="#eee" />
                                </View>)}
                            <Image source={images?.[userDetails?.accountInfo?.gender]?.[img]} 
                                style={(selectedAvatar===img)?styles.avatarHgl:styles.avatar} />
                        </TouchableOpacity>}
                    </View>);
                })}
            </View>
        </ScrollView>
        <BEFooter 
            label={{ previous:'Previous', next:'Next' }}
            previousForm={()=>{
                navigation?.navigate('SS_Authentication', { });
            }} 
            nextForm={()=>{
                // Set Avatar into USER_DETAILS
                navigation?.navigate('SS_EduStatus', { });
            }} />
    </View>);
};

const styles = StyleSheet.create({
 avatarPage:{ flex:1, backgroundColor:'#fff' },
 scrollView:{ paddingLeft:5, marginBottom:5, paddingRight:5 },
 avatarView:{ flexDirection:'row',  justifyContent:'center', flexWrap:'wrap' },
 avatar: { borderRadius:50, borderColor:'#333', borderWidth:2, width:80, height:80 },
 avatarHgl:{ borderWidth:3, borderColor:'#046e08', opacity:0.5, borderRadius:50, width:80, height:80 },
 selectView :{ position:'absolute', zIndex:1, backgroundColor:'green', 
    borderRadius: 50, alignItems:'center', justifyContent:'center', width:20,height:20, opacity:1 }
});

export default Avatar;