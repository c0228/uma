import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Page from '@AppUtils/Page.js';

const MyProgress = () =>{
  return (<Page backgroundColor="#0e7512" title="My Progress">
    <View>
      <Text>Progress Test</Text>
    </View>
  </Page>);
};

const styles = StyleSheet.create({
  
});

export default MyProgress;