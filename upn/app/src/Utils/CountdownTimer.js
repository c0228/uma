import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const CountdownTimer = ({ size = 16, duration = 24 * 60 * 60, format = 'H:M:S', onTimerEnd }) => {
  const [remainingTime, setRemainingTime] = useState(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          if (onTimerEnd) {
            onTimerEnd();
          }
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = formatTime(remainingTime, format);

  return (
    <Text style={{ fontSize: size }}>{formattedTime}</Text>
  );
};

const formatTime = (seconds, format) => {
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secondsLeft = seconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = secondsLeft.toString().padStart(2, '0');

  switch (format) {
    case 'H:M:S':
      return `${formattedHours} hr : ${formattedMinutes} min : ${formattedSeconds} sec`;
    case 'M:S':
      return `${formattedMinutes} min : ${formattedSeconds} sec`;
    case 'S':
      return `${formattedSeconds} sec`;
    default:
      return `${formattedHours} hr : ${formattedMinutes} min : ${formattedSeconds} sec`;;
  }
};

export default CountdownTimer;
