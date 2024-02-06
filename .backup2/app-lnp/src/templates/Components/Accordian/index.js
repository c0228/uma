import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


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
            const headerCss = [styles.content];
            if(index===0) {
                headerCss.push(styles.bordersTop);
            }
            if((index===data.length-1) && !isExpanded){
                headerCss.push(styles.bordersBottom);
            }
            const componentCss = [styles.content];
            if(index===data.length-1){
                componentCss.push(styles.bordersBottom);
            }
            return (<View key={index}>
                <TouchableOpacity onPress={()=>handleClick(d?.id)}>
                    <Text style={headerCss}>{d?.title}</Text>
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
    content: {
        borderWidth: 1, 
        borderStyle:'solid',  
        borderColor :'#ccc', 
        paddingTop:'1.2%', 
        paddingBottom:'1.2%', 
        paddingLeft:'2%', 
        paddingRight:'2%' 
    },
    bordersTop:{
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    bordersBottom:{
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    }
  });
