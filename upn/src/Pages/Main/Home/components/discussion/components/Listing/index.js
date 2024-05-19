import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { DrawerHeader } from '@AppPage/Main/Drawer/index.js';
import { Button } from '@AppFormElement/Button/index.js';
import { HorizontalStaticMenu } from '@AppComponent/HorizontalStaticMenu/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SubjTopics from './components/SubjTopics/index.js';
import Questions from './components/Questions/index.js';

const Listing = () =>{
 
 const DiscussionHeader = () =>{
    return ( <View style={{ borderBottomColor:'#ccc', borderBottomWidth:1, }}>
    <DrawerHeader>
        <View style={{ flexDirection:'row', paddingTop:5 }}>
            <View style={{ width:'70%'}}>
            <Text style={{ fontSize:16, fontWeight:'bold', color:'#000' }}>Join the Discussion</Text>
            </View>
            <View style={{ justifyContent:'flex-end', flexDirection:'row', width:'30%' }}>
                <View style={{ paddingLeft:15 }}>
                <TouchableOpacity>
                    <Ionicons name="search" size={22} color="#000" />
                </TouchableOpacity>
                </View>
                <View style={{ paddingLeft:15 }}>
                <TouchableOpacity>
                    <Ionicons name="add-circle-outline" size={24} color="#000" />
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </DrawerHeader>
    </View>);
 };

 


 return (
  <View style={{ backgroundColor:'#fff' }}>
    <DiscussionHeader />
    <View style={{ paddingTop: 6 }}>
     <HorizontalStaticMenu activeId="topics" data={[{ id:'topics', label:'Subjects / Topics', component: (<SubjTopics />) },
    { id:'questions', label:'Questions', component:(<Questions />) }]} />
    </View>
 </View>);
};

export default Listing;