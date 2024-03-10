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


/*const MenuSection = (props) => {

    const items=props.menuInfo.map((item=>{
        item.onPress=()=>props.navigation.navigate(item.label.name);
        return item;
    }))

    console.log(items);

    return (<MenuList {} />);
}*/
 /*   <View>
        {props?.menuInfo?.map((menu, index)=>{
            return (<DrawerItem key={index} 
                style={{ pading:1 }}
                        onPress={()=>{props.navigation.navigate(menu.name)}}
                        icon={({color, size})=><Icons name={menu.icon} 
                                                    color={color} 
                                                    size={size} />}
                        label={menu.label}>
                    </DrawerItem>);
        })}

        </View> */

const SignoutSection = () => {
    return (<MenuList fixBottom={true} items={[{
        icon:{ type:"MaterialCommunityIcons", name:"exit-to-app", color: "#777", size: 18 }, 
        label:{ name: "Signout", color: "#777", size: 13 }
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