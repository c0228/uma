import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Select } from '@AppFormElement/Select/index.js';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { HierarchyBadge, UserDisplay } from '@AppPage/Components/Social/index.js';

const Questions = () =>{
    const [questionSort, setQuestionSort] = useState();
    const navigation = useNavigation();
    const QPost = ()=>{
      return (<TouchableOpacity onPress={()=> navigation?.navigate('SS_Discussion_Answers', { })}>
      <View style={{ marginBottom:5, backgroundColor:'#f9f9f9', borderWidth:1, borderColor:'#ccc', borderRadius:8 }}>
      <View style={{  paddingTop:8, paddingBottom:5, paddingLeft:10, paddingRight:10 }}>
         <UserDisplay img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
            name="Nellutla L N Rao" status="posted 5 days ago" />
         <HierarchyBadge subject="Geography" topic="Climate of India" subTopic="Indian Meteorological Department (IMD)" />
          <View style={{ flexDirection:'row', paddingLeft:5 , paddingRight:5 }}>
              <Text style={{ lineHeight:22, fontWeight:'bold' }}>Indian Meteorological Department (IMD) is under which Department, Who was the founder of the IMD and 
                  Which Satellite is used by IMD?</Text>
          </View>
      </View>
      <View style={{ flexDirection:'row', padding:5 }}>
          <View style={{ flexDirection:'row', width:'30%', justifyContent:'center' }}>
              <View style={{ paddingTop:2 }}><Ionicons name="heart-outline" size={18} color="#aaa" /></View>
              <Text style={{ fontWeight:'bold', color:'#aaa', marginLeft:5 }}>1 Like</Text>
          </View>
          <View style={{ flexDirection:'row', width:'40%', justifyContent:'center' }}>
              <View style={{ paddingTop:2 }}><Ionicons name="chatbox-ellipses" size={20} color="#aaa" /></View>
              <Text style={{ fontWeight:'bold', color:'#aaa', marginLeft:5 }}>10 Answered</Text>
          </View>
          <View style={{ flexDirection:'row', width:'30%', justifyContent:'center' }}>
              <View><Ionicons name="share-social-sharp" size={20} color="#aaa" /></View>
              <Text style={{ fontWeight:'bold', color:'#aaa', marginLeft:5 }}>20 Share</Text>
          </View>
      </View>
      </View>
      </TouchableOpacity>);
    };

    return (<ScrollView style={styles.pageScrollView}>
    <View style={styles.jumbotronCard}>
        <View style={styles.jumbotronIcons}>
            <Ionicons name="chatbox-ellipses-outline" size={24} color="#fff" />
            <Ionicons name="chatbox-ellipses" size={24} color="#fff" />
        </View>
        <View style={styles.jumbotronTextView}>
            <Text style={styles.jumbotronText}>
            "Anyone can ask a Question and Anyone can answer a Question. Best Answers are voted up and rise to Top"
            </Text>
        </View>
    </View>
       {/* */} 
    <View style={{ flexDirection:'row', paddingTop:5, paddingBottom:5 }}>
        <View style={{ width:'20%', paddingRight:5 }}>
            <TouchableOpacity>
              <View style={{ height:40, alignItems:'center',flexDirection:'row', padding:2, borderWidth:1, borderColor:'#ccc', borderRadius:6 }}>
                <Ionicons name="add-circle-outline" size={24} color="#777" />
                <Text style={{ color:'#777', padding:2 }}>Add</Text>  
              </View>
            </TouchableOpacity>
        </View>
        <View style={{ width:'57%', paddingRight:5 }}>
            <TextBox name="" placeholder="Enter your Search" />
        </View>
        <View style={{ width:'23%' }}>
        <Select name="sortBy"
            popupTitle="Select your Priority"
            placeholder="Filters" 
            value={questionSort} 
            options={["Newest","Up Votes","UnAnswered"]?.map((opt)=>{ return { id: opt, label: opt, value: opt }; })} 
            onSelect={(value)=>{
              setQuestionSort(value);
            }} />
        </View>
    </View>
    <View style={{ paddingBottom:15 }}>
        <QPost />
        <QPost />
        <QPost />
        <QPost />
        <QPost />
        <QPost />
        <QPost />
        <QPost />
        <TouchableOpacity>
        <View style={{ borderWidth:1, borderColor:'#ccc', backgroundColor:'#f9f9f9', padding:15, borderRadius:8 }}>
            <Text style={{ color:'#000', textAlign:'center' }}>Load More</Text>
        </View>
        </TouchableOpacity>
    </View>
  </ScrollView>);
};

const styles = StyleSheet.create({
 pageScrollView:{ marginBottom:65, paddingLeft:10, paddingRight:10, marginTop:5 },
 jumbotronCard:{ flexDirection:'row', backgroundColor:'#044375', padding:10, borderRadius:8 },
 jumbotronIcons:{ width:'20%', flexDirection:'row', alignItems:'center' },
 jumbotronTextView:{ width:'80%' },
 jumbotronText:{ color:"#fff", lineHeight:22, fontSize: 14 },
 badge: { marginTop:2,marginBottom:2, fontSize:12, color:'#999', paddingTop:2, paddingBottom:2, paddingLeft:5, paddingRight:5, 
    borderWidth:1, borderColor:'#999', borderRadius:8 },
});

export default Questions;