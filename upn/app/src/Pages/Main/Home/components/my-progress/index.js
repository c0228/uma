import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Page from '@AppUtils/Page.js';
import { WeekDatesComponent } from './components/weekdays/index.js';

const MyProgress = () =>{
  return (<Page backgroundColor="#0e7512" title="My Progress">
  <ScrollView style={styles.scrollView}>
   <WeekDatesComponent />
  </ScrollView>
  </Page>);
};


const styles = StyleSheet.create({
  scrollView: { paddingLeft:15, paddingTop:15, paddingRight: 15 }
 });

export default MyProgress;