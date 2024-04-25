import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet  } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { Tooltip } from "e-ui-react-native";

/*
colorConfig={{
     active: { color: Colors.light },
     default: { color: Colors.secondary }
 }}
*/

const MenuListData = [{ id:'exam-pattern', label:'Exam Pattern', component:(<Text>Exam Pattern</Text>)},
                     { id:'syllabus', label:'Syllabus', component:(<Text>Syllabus</Text>) }];

const HorizontalStaticMenu = ({ data, activeId, colorConfig }) => {
    const defaultActiveId = data[0]?.id;
    const [selectedMenu, setSelectedMenu] = useState(activeId || defaultActiveId);

    const activeColor = colorConfig?.active?.color || '#df0d55';
    const defaultColor = colorConfig?.default?.color || '#000';

    const handleMenuPress = (id) => { setSelectedMenu(id); };

    const getMenuTextStyle = (menuId) => ({
        width: `${100 / data.length}%`,
        color: menuId === selectedMenu ? activeColor : defaultColor,
        ...(menuId === selectedMenu && { borderColor: activeColor })
    });

    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {data.map((menuItem) => (
                    <Text
                        key={menuItem.id}
                        style={[HorizontalStaticMenuStyle.hrMenu, getMenuTextStyle(menuItem.id) ]}
                        onPress={() => handleMenuPress(menuItem.id)}>
                        {menuItem.label}
                    </Text>
                ))}
            </View>
            <ScrollView style={{ paddingTop: 10, paddingBottom: 15 }}>
                {data.find((menuItem) => menuItem.id === selectedMenu)?.component}
            </ScrollView>
        </>
    );
};


const HorizontalStaticMenuStyle = StyleSheet.create({ 
 hrMenuSelected: { textAlign:'center', borderBottomWidth:2, paddingBottom:10, fontWeight:'bold', marginRight:10 },
 hrMenu:{ textAlign:'center', paddingBottom:10, fontWeight:'bold' }
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
