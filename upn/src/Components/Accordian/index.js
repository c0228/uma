import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const Accordian = ({ id, data, defaultOpen}) => {
  const [ opened, setOpened ] = useState([defaultOpen]);
  useEffect(()=>{
    if(defaultOpen?.length>0){
        // Check defaultOpen is right Id or not and then  set it
        setOpened([...opened, defaultOpen]);
    }
  },[]);
  const handleClick=(id)=>{
    if(opened.includes(id)){ // remove
        setOpened(opened?.filter((x)=>x!==id));
    } else { // add
        setOpened([...opened, id]);
    }
  };

  return (
    <View>
        {data?.map((d, index)=>{
            const isExpanded = opened.includes(d?.id);
            const headerCss = [{  padding:10, color:'#000', fontWeight:'bold', flexWrap:'wrap' }];
            const headerViewCss=[{  flexDirection:'row', borderWidth: 1, 
                borderStyle:'solid',  
                borderColor :'#ccc', padding:10, }];
            if(index===0) {
                headerViewCss.push(styles.bordersTop);
            }
            if((index===data.length-1) && !isExpanded){
                headerViewCss.push(styles.bordersBottom);
            }
            const componentCss = [{  padding:10, color:'#000', borderWidth: 1, 
            borderStyle:'solid',  
            borderColor :'#ccc', }];
            if(index===data.length-1){
                componentCss.push(styles.bordersBottom);
            }
            return (<View key={index} style={{ flex:2, flexWrap:'wrap' }}>
                
                <TouchableOpacity onPress={()=>handleClick(d?.id)}>
                    <View style={headerViewCss}>
                    <View style={{ width:'95%' }}>{d?.title}</View>
                    <View style={{ width:'5%', justifyContent:'center' }}>
                    <FontAwesome5 name="angle-double-down" size={16} color="#333" style={{ textAlign:'right' }} />
                    </View>
                    </View>
                </TouchableOpacity>
                
                {isExpanded && (
                    <View>
                    <Text style={componentCss}>{d?.component}</Text>
                    </View>
                )}
            </View>);
        })}
    </View>
  );
};

const styles = StyleSheet.create({
    bordersTop:{
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    bordersBottom:{
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
  });
