import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Logo from "@Assets/img/logo-default.png";

const Drawer = createDrawerNavigator();

export const DrawerHeader = ({ children }) => {
    const navigation = useNavigation();
    return (
      <View style={styles.customHeader}>
        <View style={{ width:'10%' }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu-outline" size={30} style={styles.hamburgerIcon} />
          </TouchableOpacity>
        </View>
        <View style={{ width:'90%', flexDirection:'row' }}>
        {children}
        </View>
      </View>
    );
};

function CustomDrawerItem({ label, iconName, onPress, focused }) {
    return (
      <View style={[focused && styles.drawerItemContainerFocused]}>
        <DrawerItem
          label={() => (
            <View style={styles.labelContainer}>
              <Ionicons name={iconName} size={22} style={[styles.icon, focused && styles.iconFocused]} />
              <Text style={[styles.labelText, focused && styles.labelTextFocused]}>{label}</Text>
            </View>
          )}
          onPress={onPress}
          style={[styles.drawerItem, focused && styles.drawerItemFocused]}
        />
      </View>
    );
}

function DrawerContent(props) {
    const { state, descriptors, navigation } = props;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.header}>
          {/*<Text style={styles.headerText}>Custom Header</Text>*/}
          <Image style={{ width:160, height:18, marginLeft:3, marginTop:3 }} source={Logo} />
        </View>
        <DrawerContentScrollView {...props}>
          {state.routes.map((route, index) => {
            const { drawerLabel, drawerIcon } = descriptors[route.key].options;
            const focused = state.index === index;
            return (
              <CustomDrawerItem
                key={route.key}
                label={drawerLabel ? drawerLabel : route.name}
                iconName={drawerIcon ? drawerIcon : "home-outline"}
                onPress={() => navigation.navigate(route.name)}
                focused={focused}
              />
            );
          })}
        </DrawerContentScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Custom Footer</Text>
        </View>
      </SafeAreaView>
    );
}

const DrawerNavigation = ({ screens }) =>{

 return (<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }} >
    {screens?.map((screen, index)=>{
        return (<Drawer.Screen key={index} name={screen?.id} component={screen?.component} 
            options={{ drawerLabel: screen?.name, drawerIcon: screen?.icon }} />);
    })}
 </Drawer.Navigator>);
};

const styles = StyleSheet.create({
 customHeader: { flexDirection: 'row', paddingLeft: 15, paddingRight:15, paddingTop:12, paddingBottom:8 },
 hamburgerIcon: { marginRight: 15, color:'#000' },
 headerTitle: { fontSize: 18, fontWeight: 'bold' },
 header: { padding: 20 },
 headerText: { fontSize: 18, fontWeight: 'bold' },
 footer: { padding: 20, backgroundColor: '#f4f4f4', marginTop: 'auto' },
 footerText: { fontSize: 16 },
 labelContainer: { flexDirection: 'row', alignItems: 'center' },
 icon: { marginRight: 10 },
 labelText: { fontSize: 15 },
 drawerItem: { borderRadius: 8, paddingBottom: 4, marginVertical:-5 },
 drawerItemContainerFocused: { backgroundColor: '#e0e0e0' },
 iconFocused: { color: '#007AFF' },
 labelTextFocused: { color: '#007AFF' },
});

export default DrawerNavigation;