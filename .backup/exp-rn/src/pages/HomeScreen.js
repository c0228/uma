import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Row, Col } from 'react-native-responsive-grid-system';
import { Accordian } from "@AppComponent/Accordian/index.js";
import { Alert } from "@AppComponent/Alert/index.js";
import { Avatar } from "@AppComponent/Avatar/index.js";
import { Badge } from "@AppComponent/Badge/index.js";

export const HomeScreen = (props)=>{
 return ( <View>
    <StatusBar translucent backgroundColor="orange" style="auto" height="5%"  />
    <View  style={styles.content}>
        <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
            <Badge label="Open Drawer Content" type="primary" size={12} />
        </TouchableOpacity>
    {/* */}
    <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <Accordian id="AccordianExample" 
        data={[{ id:"Item#1", title: "Accordion Item #1", component:"This is the first item's accordion body"  },
               { id:"Item#2", title: "Accordion Item #2", component:"This is the Second item's accordion body"  },
               { id:"Item#3", title: "Accordion Item #3", component:"This is the Third item's accordion body"  }]} 
        defaultOpen="Item#2" />
    </Col>
    <Col xs={12} sm={12} md={12} lg={12}>
    <View>
      <Alert show={true} type="success" heading="Heading" body="Operation successful!" />
      <Alert show={true} type="warning" body="Warning: This action cannot be undone!" />
      <Alert show={true} type="danger" body="Error: Something went wrong." />
      <Alert show={true} body="Info: This is just an informational message." />
    </View>
    </Col>
    <Col xs={12} sm={12} md={12} lg={12}>
      <Avatar
          src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg"
          name="John Doe"
          size={50}
        />
        <Avatar
          src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg"
          name="John Doe"
          size={75}
        />
        <Avatar
          src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg"
          name="John Doe"
          size={100}
        />
        <View style={{ flexDirection:'row', flexWrap: 'wrap' }}>
          <Badge label="Primary Badge" type="primary" size={12} />
          <Badge label="Secondary Badge" type="secondary" size={12} />
          <Badge label="Success Badge" type="success" size={12} />
          <Badge label="Danger Badge" type="danger" size={12} />
          <Badge label="Warning Badge" type="warning" size={12} />
          <Badge label="Info Badge" type="info" size={12} />
          <Badge label="Light Badge" type="light" size={12} />
          <Badge label="Dark Badge" type="dark" size={12} />
        </View>
    </Col>
    </Row>
    {/* */}
    </View>
    </View>
 );
};

const styles = StyleSheet.create({
    content: {
      marginTop: '5%',
      paddingTop: '5%',
      paddingLeft:'2%',
      paddingRight:'2%'
    },
  });
