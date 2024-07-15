import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button , Dimensions, Vibration, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContext } from '@react-navigation/native';

export default function Scanner() {
  const navigation = React.useContext(NavigationContext);
  const [hasPermission, setHasPermission] = useState(null);
  // const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
   //  setScanned(true);
    navigation.navigate('WelcomeScreen',{ scanCode: data  });
    /**
     *  
     */
  // 
  // alert(`${data}`);
  //  navigation.navigate('', { });
   //
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.cameraContainer]}
      />
      <View style={{ flex:30 }}>
        <View style={{ flex:3 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={()=>{ navigation.goBack() }} >
          <Ionicons name="arrow-back-outline" style={{ color:'#fff', padding:15 }} size={30} />
          </TouchableOpacity>
        </View>


          {<View style={{ flex:21, paddingLeft:15, justifyContent:'center', alignItems:'center'}}>
            <Ionicons name="ios-scan-outline" style={{ color:'#fff'}} size={400} />
            </View>}
            <View style={{ flex:6, alignItems:'center', justifyContent:'center' }}>
              <Text style={{ color:'#fff', fontSize:22 }}>Place the QR Code inside the area</Text>
              <Text style={{ padding:15, color:'#ccc', fontSize:18 }}>(Scanning will start Automatically)</Text>
              {<Text style={{ padding:10, color:'#fff', textDecorationLine: 'underline', fontStyle: 'italic'  }} 
              onPress={() => setScanned(false)}>Not Working ? Click here to Scan Again</Text>}
            </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#000',
  },
  cameraContainer: {
    width: Dimensions.get('screen').width*1.8,
    height: Dimensions.get('screen').height*1.1,
  }
});
