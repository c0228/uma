import React, { useState, useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet  } from 'react-native';
import { HamburgerIcon } from '@AppNavigation/Drawer/index.js';
import { Tooltip } from "e-ui-react-native";
import ExamPaperPlan from './components/ExamPaperPlan/index.js';
import ExamSyllabus from './components/ExamSyllabus/index.js';
/*
colorConfig={{
     active: { color: Colors.light },
     default: { color: Colors.secondary }
 }}
*/

const MenuListData = [{ id:'paper-pattern', label:'Paper Pattern', component: <ExamPaperPlan /> },
                     { id:'syllabus', label:'Syllabus', component:(<ExamSyllabus />) },
                     { id:'scoring-tips', label:'Scoring Tips', component:(<Text>Scoring Tips</Text>) }];

const HorizontalStaticMenu = ({ data, activeId, colorConfig }) => {
    const defaultActiveId = data[0]?.id;
    const [selectedMenu, setSelectedMenu] = useState(activeId || defaultActiveId);

    const activeColor = colorConfig?.active?.color || '#df0d55';
    const defaultColor = colorConfig?.default?.color || '#000';

    const handleMenuPress = (id) => { setSelectedMenu(id); };

    const getMenuTextStyle = (menuId) => ({
        color: menuId === selectedMenu ? activeColor : defaultColor,
        ...(menuId === selectedMenu && { borderBottomWidth:2, borderColor: activeColor })
    });

    const MenuItemComponent = ({ component }) => {
        return useMemo(() => {
            return component;
        }, [component]);
    };

    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor:'#fff' }}>
                {data.map((menuItem) => (
                    <TouchableOpacity key={menuItem.id} style={{ width: `${100 / data.length}%` }} 
                        onPress={() => handleMenuPress(menuItem.id)}>
                    <Text style={[HorizontalStaticMenuStyle.hrMenu, getMenuTextStyle(menuItem.id) ]}>
                        {menuItem.label}
                    </Text>
                    </TouchableOpacity>))}
            </View>
            <ScrollView style={{ paddingLeft:10,paddingRight:10, paddingBottom: 35 }}>
              <MenuItemComponent component={data.find((menuItem) => menuItem.id === selectedMenu)?.component} />
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
    <Text style={[SyllabusStyle.mainTitle, SyllabusStyle.textCenter, SyllabusStyle.mbot15p]}>Civil Service Examination (CSE)</Text>
    <HorizontalStaticMenu activeId="paper-pattern" data={MenuListData} />
    </View>);
};

const SyllabusStyle = StyleSheet.create({ 
 mbot15p: { marginBottom:15 },
 textCenter: { textAlign: 'center' },
 mainTitle: { fontSize:18, paddingBottom:6, fontWeight:'bold', color:'#000', lineHeight: 22 }
});

export default React.memo(Syllabus);
