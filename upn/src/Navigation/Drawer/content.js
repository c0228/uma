import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; 
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Drawer, Text, Caption } from 'react-native-paper';
import DrawerStyles from './styles';
import { DrawerUserProfile, MenuList } from 'e-ui-react-native';
import StudyTT from './../../Pages/StudyTT/index.js';
import MyProfile from './../../Pages/MyProfile/index.js';
import Settings from './../../Pages/Settings/index.js';

const UserSection = ({ userInfo }) => {
    return (<>
        <DrawerUserProfile image={userInfo.image} 
            displayName={userInfo.displayName} 
            accountType={userInfo.accountType} />

    {userInfo?.shortDesc?.length>0 && (
     <View>
        <View style={DrawerStyles.shortDescSection}>
            <Caption style={DrawerStyles.shortDesc}>{userInfo.shortDesc}</Caption>
        </View>
     </View>
    )}
    </>);
}

const SignoutSection = () => {
    return (<MenuList items={[{
        icon:{ type:"FontAwesome5", name:"user-graduate", color: "#000", size: 17 }, 
        label:{ name: "Study Timetable", color: "#000", size: 14 },
        component: StudyTT
    },{
        icon:{ type:"FontAwesome5", name:"user-check", color: "#000", size: 17 }, 
        label:{ name: "My Profile", color: "#000", size: 14 },
        component: MyProfile
    },
    {
        icon:{ type:"Ionicons", name:"settings", color: "#000", size: 18 }, 
        label:{ name: "Settings", color: "#000", size: 14 },
        component: Settings
    },{
        icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#000", size: 18 }, 
        label:{ name: "Signout", color: "#000", size: 14 }
    }]} />);
}

const DrawerContent = (props) => {
 return <View style={DrawerStyles.drawerContentView}>
     <DrawerContentScrollView {...props}>
        <View style={DrawerStyles.drawerContentView}>
            <UserSection userInfo={props.drawerInfo.user} />
            <MenuList items={props.drawerInfo.menu} {...props}/>
        </View>
    </DrawerContentScrollView>     
    <SignoutSection />
 </View>;
}

export default DrawerContent;