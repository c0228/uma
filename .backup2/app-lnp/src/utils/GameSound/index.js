import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getAppContext } from '@AppAdvancedTopics/ReactContext/index.js';
import { Audio } from 'expo-av';

export const GameSound = () => {
    const [play, setPlay] = useState(true);
    const [sound, setSound] = useState();

    useEffect(()=>{
      init();
    },[]);
  
    const init = async () => {
      const { sound } = await Audio.Sound.createAsync(require('@AppAssets/media/bg.mp3'), { shouldPlay: true, isLooping: true });
      setSound(sound);
    };
  
    const playSound = async () => {
      if (sound) {
          await sound.playAsync();
      }
    };
  
    const pauseSound = async () => {
      if (sound) {
        await sound.pauseAsync();
      }
    };
  
    const toggleSound = () =>{
        if(play){
            pauseSound();
            
        } else {
            playSound();
        }
        setPlay(!play);
    };

    useEffect(() => {
      return sound ? (() => { sound.unloadAsync(); }) : undefined;
    }, [sound]);

  return (
    <View style={styles.settings}>
    <TouchableOpacity onPress={toggleSound}>
      <Icon name={play ? 'volume-up' : 'volume-mute'} size={30} color="#900" />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    settings: { width:'90%', position:'absolute', marginVertical:45, marginHorizontal: 20, display:'flex', flexDirection: 'row', justifyContent:'flex-end' },
});
