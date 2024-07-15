import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer'; 
import { Caption } from 'react-native-paper';
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

const DrawerContent = (props) => {
 return <View style={DrawerStyles.drawerContentView}>
     <DrawerContentScrollView {...props}>
        <View style={DrawerStyles.drawerContentView}>
            <UserSection userInfo={props?.drawerInfo?.user} />
            <MenuList items={props?.drawerInfo?.menu} {...props}/>
        </View>
    </DrawerContentScrollView>     
    <MenuList items={props?.bottomMenu}  {...props}/>
 </View>;
}

export default DrawerContent;