import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; 
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Drawer, Text, Caption } from 'react-native-paper';
import DrawerStyles from './styles';
import { DrawerUserProfile, MenuList } from 'e-ui-react-native';

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
        icon:{ type:"FontAwesome5", name:"user-graduate", color: "#777", size: 17 }, 
        label:{ name: "My Profile", color: "#777", size: 14 }
    },
    {
        icon:{ type:"Ionicons", name:"settings", color: "#777", size: 18 }, 
        label:{ name: "Settings", color: "#777", size: 14 }
    },{
        icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#777", size: 18 }, 
        label:{ name: "Signout", color: "#777", size: 14 }
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