import React, { useState, useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet  } from 'react-native';

export const HorizontalStaticMenu = ({ data, activeId, colorConfig }) => {
    /*
colorConfig={{
     active: { color: Colors.light },
     default: { color: Colors.secondary }
 }}
*/

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
            <View style={{ flexDirection: 'row', backgroundColor:'transparent' }}>
                {data.map((menuItem) => (
                    <TouchableOpacity key={menuItem.id} style={{ width: `${100 / data.length}%` }} 
                        onPress={() => handleMenuPress(menuItem.id)}>
                    <Text style={[HorizontalStaticMenuStyle.hrMenu, getMenuTextStyle(menuItem.id) ]}>
                        {menuItem.label}
                    </Text>
                    </TouchableOpacity>))}
            </View>
            <View>
              <MenuItemComponent component={data.find((menuItem) => menuItem.id === selectedMenu)?.component} />
            </View>
        </>
    );
};


const HorizontalStaticMenuStyle = StyleSheet.create({ 
 hrMenuSelected: { textAlign:'center', borderBottomWidth:2, paddingBottom:10, fontWeight:'bold', marginRight:10 },
 hrMenu:{ textAlign:'center', paddingBottom:10, fontWeight:'bold', borderBottomWidth:1, borderColor:'#ccc' }
});