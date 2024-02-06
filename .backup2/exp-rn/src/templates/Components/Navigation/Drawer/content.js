import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; 
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, Title, Drawer, Text, Caption } from 'react-native-paper';
import DrawerStyles from './styles';

const UserSection = ({ userInfo }) => {
    return (<>
    <Drawer.Section>
    <View style={DrawerStyles.userInfoSection}>
        <View style={{flexDirection:'row'}}>
            <View style={{marginTop:8, marginBottom:10}}>
                <Avatar.Image 
                    source={{uri: userInfo.image }} 
                    size={50} />
            </View>
            <View style={{marginLeft:15, marginTop:1, flexDirection:'column'}}>
                <Title style={DrawerStyles.title}>{userInfo.displayName}</Title>
                <Text style={DrawerStyles.userType}>{userInfo.accountType}</Text>
            </View>
        </View>
    </View>
    </Drawer.Section>
    {userInfo.shortDesc.length>0 && (
     <Drawer.Section>
        <View style={DrawerStyles.shortDescSection}>
            <Caption style={DrawerStyles.shortDesc}>{userInfo.shortDesc}</Caption>
        </View>
     </Drawer.Section>
    )}
    </>);
}


const MenuSection = (props) => {
    return (<Drawer.Section>
        {props.menuInfo.map((menu, index)=>{
            return (<DrawerItem key={index}
                        onPress={()=>{props.navigation.navigate(menu.name)}}
                        icon={({color, size})=><Icons name={menu.icon} 
                                                    color={color} 
                                                    size={size} />}
                        label={menu.label}>
                    </DrawerItem>);
        })}
        </Drawer.Section>);
}

const SignoutSection = () => {
    return (<Drawer.Section style={DrawerStyles.bottomDrawerSection}>
        <DrawerItem 
            icon={({color, size})=><Icons name="exit-to-app" 
                                        color={color} 
                                        size={size} />}
            label="Signout">
        </DrawerItem>
    </Drawer.Section>);
}

const DrawerContent = (props) => {
 return <View style={DrawerStyles.drawerContentView}>
     <DrawerContentScrollView {...props}>
        <View style={DrawerStyles.drawerContentView}>
            <UserSection userInfo={props.drawerInfo.user} />
            <MenuSection menuInfo={props.drawerInfo.menu} {...props}/>
        </View>
    </DrawerContentScrollView>     
    <SignoutSection />
 </View>;
}

export default DrawerContent;