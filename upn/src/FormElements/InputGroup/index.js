import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Select } from '@AppFormElement/Select/index.js';
import { Button } from '@AppFormElement/Button/index.js';

export const InputGroup = (props) => {
  const elementsList = Object.entries(props?.elements);
  return (
    <View style={styles.container}>
        <View style={{ flexDirection:'row' }}>
        {elementsList?.map(([key, value],index) =>{
         const sty = (index===0)?styles?.leftStyle:((index===elementsList?.length-1)?styles.rightStyle:styles.middleStyle);
         if(value?.element?.toLowerCase()==='select'){
            return (<Select key={index} {...value} style={sty} />);
         } else if(value?.element?.toLowerCase()==='button'){
            return (<Button key={index} {...value} style={[sty]} />);
         }
        })}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  leftStyle:{ borderTopRightRadius:0, borderBottomRightRadius:0 },
  middleStyle:{ borderLeftWidth:0, borderTopLeftRadius:0, borderBottomLeftRadius:0, borderTopRightRadius:0, borderBottomRightRadius:0 },
  rightStyle:{ borderLeftWidth:0, borderTopLeftRadius:0, borderBottomLeftRadius:0 }
});
export default InputGroup;
