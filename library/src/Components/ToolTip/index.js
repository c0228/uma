import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TooltipR = ({ text, children })=>{
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleTooltip = () => {
      setShowTooltip(!showTooltip);
    };

    const rotation = '0deg';
    return (
        <View>
          <View style={styles.tooltip}>
            {children}
            <View style={[styles.arrow, { transform: [{ rotate: rotation }] }]}></View>
            <Text style={styles.tooltipText}>{text}</Text>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    tooltip: {
      position: 'relative',
    },
    tooltipText: {
      width: 120,
      backgroundColor: 'black',
      color: '#fff',
      textAlign: 'center',
      borderRadius: 6,
      paddingVertical: 5,
      paddingHorizontal: 10,
      position: 'absolute',
      zIndex: 1,
      bottom: '100%',
      left: '50%',
      marginLeft: -60,
    },
     /* arrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 0,
        borderLeftWidth: 5,
        borderTopColor: 'black',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
      },*/
  });
/*
const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    tooltip: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 8,
      borderRadius: 4,
      zIndex: 999,
    },
    tooltipText: {
      color: 'white',
    },
  });
  */