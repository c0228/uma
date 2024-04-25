import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet  } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { Tooltip } from "e-ui-react-native";

const MenuListData = [{ id:'exam-pattern', label:'Exam Pattern', component:(<Text>Exam Pattern</Text>)},
                     { id:'syllabus', label:'Syllabus', component:(<Text>Syllabus</Text>) }];

const HorizontalStaticMenu = ({ data }) =>{
 const [selectedMenu, setSelectedMenu] = useState(data[0]?.id);
 return (<>
 <View style={{ flex:1, flexDirection:'row' }}>
    {data?.map((d,i)=>{
        return (
        <Text style={[((d?.id===selectedMenu)?HorizontalStaticMenuStyle.hrMenuSelected:HorizontalStaticMenuStyle.hrMenu), 
            { width: `${100 / data.length}%` }]} 
        onPress={()=>setSelectedMenu(d?.id)}>{d?.label}</Text>);
    })}
</View>
<ScrollView style={{ paddingTop:10, paddingBottom: 15 }}>
    {data?.filter((d)=>d?.id===selectedMenu)[0]?.component}
</ScrollView>
</>);
};

const HorizontalStaticMenuStyle = StyleSheet.create({ 
 hrMenuSelected: { textAlign:'center', borderBottomWidth:2, borderColor:'#df0d55', paddingBottom:10, fontWeight:'bold', color:'#df0d55', marginRight:10 },
 hrMenu:{ textAlign:'center', paddingBottom:10, fontWeight:'bold', color:'#000' }
});



const Syllabus = (props) =>{
    return (<View style={{ flex:1, backgroundColor:'#fff'  }}>
    <HamburgerIcon {...props}/>      
    <ScrollView style={{ paddingLeft:15, paddingRight: 15 }}>
    <Text style={[SyllabusStyle.mainTitle, SyllabusStyle.textCenter, SyllabusStyle.mbot15p]}>Civil Service Examination (CSE)</Text>
    <HorizontalStaticMenu data={MenuListData} />
    </ScrollView>
    </View>);
};

const SyllabusStyle = StyleSheet.create({ 
 mbot15p: { marginBottom:15 },
 textCenter: { textAlign: 'center' },
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 }
});

export default Syllabus;
