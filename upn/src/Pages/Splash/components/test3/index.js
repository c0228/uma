// App.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { initializeFCM } from '@AppUtils/FCM.js';

const Test3 = () => {
  useEffect(() => {
    const messaging = initializeFCM();
    messaging.onMessage(async remoteMessage => { // Handle foreground messages
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
     });
  }, []);

  return (
    <View>
      <Text>Welcome to React Native Firebase Messaging</Text>
    </View>
  );
};

export default Test3;
