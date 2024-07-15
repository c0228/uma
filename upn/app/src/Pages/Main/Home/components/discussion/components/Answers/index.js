import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HierarchyBadge, UserDisplay } from '@AppPage/Components/Social/index.js';
import { TextBox } from '@AppFormElement/TextBox/index.js';
import { Form } from '@AppFormElement/Form/index.js';

const Answers = () =>{
    const StackHeader = () => {
        const navigation = useNavigation();
        return (
          <View style={styles.stackHeaderView}>
            <View style={{ width:'10%' }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={{ width:'90%', flexDirection:'row' }}>
            <Text style={{ fontWeight:'bold', fontSize:16, color:'#000' }}>Discussion: Question & Answers</Text>
            </View>
          </View>
        );
    };

    const Question = () =>{
     return (<View style={{ backgroundColor:'#f9f9f9', borderWidth:1, borderColor:'#ccc' }}>
     <View style={{  paddingTop:8, paddingBottom:5, paddingLeft:10, paddingRight:10 }}>
         <UserDisplay img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
            name="Nellutla L N Rao" status="posted 5 days ago" />
         <HierarchyBadge subject="Geography" topic="Climate of India" subTopic="Indian Meteorological Department (IMD)" />
         <View style={{ flexDirection:'row', paddingLeft:5 , paddingRight:5 }}>
             <Text style={{ lineHeight:22, fontWeight:'bold' }}>Indian Meteorological Department (IMD) is under which Department, Who was the founder of the IMD and 
                 Which Satellite is used by IMD?</Text>
         </View>
     </View>
     </View>);
    };

    const DisplayAnswer = ()=>{
        return (<View style={{ borderWidth:1, borderColor:'#ccc', padding:10 }}>
        <UserDisplay img="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg"
                name="Nellutla L N Rao" status="answered 5 days ago" />
        <Text style={{ lineHeight:22, paddingTop:5 }}>
        Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie 
        vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. 
        Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
        </Text>
        <View style={{ flexDirection: 'row', paddingTop:10 }}>
            <View style={{ flexDirection:'row', width:'50%' }}>
                <Text style={{ fontSize:14, color:'#999', fontWeight:'bold' }}>VOTES :</Text>
                <TouchableOpacity>
                    <View style={{ flexDirection:'row' }}>
                        <Text style={{ marginLeft:8, fontSize:14, color:'#999' }}>10</Text>
                        <Ionicons name="arrow-up-circle-outline" size={22} color="#999" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ flexDirection:'row' }}>
                        <Text style={{ marginLeft:8, fontSize:14, color:'#999' }}>10</Text>
                        <Ionicons name="arrow-down-circle-outline" size={22} color="#999" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:'row', width:'50%', justifyContent:'flex-end' }}>
                <TouchableOpacity>
                    <View style={{ flexDirection:'row' }}>
                        <Ionicons name="chatbubble-ellipses-outline" size={22} color="#999" />
                        <Text style={{ marginLeft:8, marginRight:15, fontSize:14, color:'#999' }}>10 Replies</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </View>);
    };


    const AspirantAnswer = ()=>{
        return (<View style={{ padding:15 }}>
            <Form name="register" btnSubmit={{
              btnType:'primary',
              label:'Submit My Answer',
              size: 14
            }} 
            onSubmit={(form, isValidForm, triggerReset)=>{
              console.log("Form Result:", form);
              triggerReset();
            }}>
            <View style={{ marginBottom:15}}>
             <TextBox name="comment" placeholder="Write your Answer" multiline={true} numberOfLines={3} />
            </View>
            </Form>
        </View>);
    };


 return (<View style={{ backgroundColor:'#fff' }}>
    <StackHeader />
    <ScrollView>
        <View style={{ marginBottom: 45 }}>
            <Question />
            <Text style={styles.answerHeader}>Answers</Text>
            <View>
                <DisplayAnswer />
                <DisplayAnswer />
                <DisplayAnswer />
                <DisplayAnswer />
                <AspirantAnswer />
            </View>
        </View>
    </ScrollView>
 </View>);
};

const styles = StyleSheet.create({
 stackHeaderView: { flexDirection: 'row', paddingLeft: 15, paddingRight:15, paddingTop:12, paddingBottom:8, 
    borderBottomWidth:1, borderBottomColor:'#ccc' },
 answerHeader:{ fontWeight:'bold', textAlign:'center', padding:5, backgroundColor:'#eee', borderTopWidth:1, 
    borderBottomWidth:2, borderColor:'#ccc' }
});

export default Answers;