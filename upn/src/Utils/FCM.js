import messaging from '@react-native-firebase/messaging';

export const initializeFCM = ()=>{
// Request user permission for notifications
messaging().requestPermission()
.then(authStatus => {
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
});

messaging().getToken().then(token => { // Send this token to your backend server to use it for sending messages
console.log('Device FCM Token:', token); 
});

messaging().onTokenRefresh(token => { // Update your server with the new token
console.log('New FCM Token:', token);
});
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
    