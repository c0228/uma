import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import notifee from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationHandler = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const handleInitialNotification = async () => {
      console.log("handleInitialNotification:");
      const initialNotification = await notifee.getInitialNotification();
      console.log("initialNotification", initialNotification?.pressAction);
      if(initialNotification?.pressAction){
        handleNotificationAction(initialNotification?.pressAction);
      }
    };

    const handleNotificationAction = (pressAction) => {
      console.log("handleNotificationAction", pressAction);
        const route = pressAction?.mainComponent?.split("|");
        if(route){
            navigation.navigate(route?.[0], { screen: pressAction?.mainComponent });
        }
    };

    const setupNotifications = async () => {
        // Handle initial notification when the app is opened from a closed state
        handleInitialNotification();
        notifee.onForegroundEvent(async({ type, detail }) => {
            console.log("handleForegroundNotification:", detail?.pressAction);
            if (detail?.pressAction) {
                if(type === 1) {
                    handleNotificationAction(detail?.pressAction);
                }
            }
          });
       
    };

    setupNotifications();
  }, []);

  return null;
};

export default NotificationHandler;
