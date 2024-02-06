import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export const Avatar = ({ src, name, size }) => {
  return (
    <View>
      <Image source={{ uri: src }} style={[styles.image, { 
        width: size?size:100, 
        height: size?size:100 }]} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});