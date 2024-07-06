import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import { AddToSPStore, getFromSPStore } from '@AppUtils/EncryptSharedPreferences.js';
import { GetCurrentTimeStamp, getDiffTimeFromNow, TIMESTAMP_TZ_FORMAT } from '@AppUtils/DateTime.js';
import { NEXUS_URL } from '@StaticData/urls.js';

const forceTokenRefresh = async(userDetails) => {
  try {
    await messaging().deleteToken(); // Delete the current FCM token
    const token = await messaging().getToken(); // Get a new FCM token manually
    /* Add/Update token and deviceId into mq_user_devices */
    let postParams = { token: token };
    if(userDetails?.device?.id?.length>0){ postParams.deviceId = userDetails?.device?.id; }
    axios.post(NEXUS_URL+'add/token', postParams).then(async(response) => { 
      const device = {
        id: response?.data?.params?.deviceId,
        token: response?.data?.params?.token,
        lastUpdated: GetCurrentTimeStamp()
      };
      AddToSPStore('USER_DETAILS', {...userDetails, device }); // Set deviceId and token in USER_DETAILS
    }).catch((err)=>console.log("forceTokenRefresh", err));
  } catch (error) {
    console.error('Failed to refresh token:', error);
  }
};

export const initializeFCM = async()=>{ // Request user permission for notifications
 messaging().requestPermission().then(authStatus => {
  const enabled = (authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                  authStatus === messaging.AuthorizationStatus.PROVISIONAL);
  if (enabled) { console.log('Authorization status:', authStatus); }
 });
 let userDetails = await getFromSPStore('USER_DETAILS');
 if(!userDetails?.device?.token){
  await forceTokenRefresh(userDetails); 
 } else if(userDetails?.device?.lastUpdated){
    const timestamp = getDiffTimeFromNow(userDetails?.device?.lastUpdated, TIMESTAMP_TZ_FORMAT);
    if(timestamp?.remainingHours<-720){ await forceTokenRefresh(userDetails); }
 }
/*
messaging().onMessage(async remoteMessage => { // Handle foreground messages
console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
});
messaging().subscribeToTopic('news-updates').then(() => {
console.log(`Subscribed to topic: news-updates`);
}).catch((error) => {
console.error('Error subscribing to topic:', error);
});
messaging().onNotificationOpenedApp(remoteMessage => {
console.log('Notification caused app to open from background state:', remoteMessage.notification);
});
messaging().unsubscribeFromTopic('Broadcasting').then(() => {
console.log(`Unsubscribed from topic: Broadcasting`);
}).catch((error) => {
console.error('Error unsubscribing from topic:', error);
}); */
return messaging();
};
    