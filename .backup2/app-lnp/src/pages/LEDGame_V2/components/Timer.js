import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Timer = () => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(timer);
        // Timer expired, you can perform any actions here
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <Text style={{ fontSize: 14, fontWeight:'bold' }}>{seconds}s</Text>
  );
};

