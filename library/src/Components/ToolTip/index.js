import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';

export const Tooltip = ({ title, timeout, children })=>{
    const [showTooltip, setShowTooltip] = useState(false);
    const triggerTooltip = () =>{
        setShowTooltip(!showTooltip); 
        setTimeout(()=>setShowTooltip(false), timeout);
    };
    return (
          <View style={styles.tooltip}>
            <TouchableOpacity onPress={()=>triggerTooltip()}>{children}</TouchableOpacity>
            {showTooltip && (<>
                <View style={[styles.arrowHolder, styles.arrowDown]}></View>
                <Text style={[styles.tooltipHolder, styles.tooltipUp]}>{title}</Text>
            </>)}
          </View>
      );
};

const styles = StyleSheet.create({
    tooltip: { position: 'relative' },
    tooltipHolder:{ width: 180, backgroundColor: 'black', color: '#fff', textAlign: 'center', borderRadius: 6, paddingVertical: 5, paddingHorizontal: 10,
        position: 'absolute', zIndex: 2 },
    arrowHolder:{ position:'absolute', width: 0, height: 0, backgroundColor: 'transparent',
        borderStyle: 'solid', borderTopWidth: 5, borderRightWidth: 5, borderBottomWidth: 0, borderLeftWidth: 5, borderTopColor: 'black', borderRightColor: 'transparent',
        borderBottomColor: 'transparent', borderLeftColor: 'transparent' },
    tooltipUp: { bottom: '120%', left: '50%', marginLeft: -60 },
    arrowDown: { left:'50%', top:'-20%' }

  });