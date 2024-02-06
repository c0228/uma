import React, { useState } from 'react';
import { View, Text, Image, Button, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Badge } from "@AppComponent/Badge/index.js";
import axios from 'axios';

export const  ImageUpload = () => {
    const [image, setImage] = useState(null);



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
         ToastAndroid.show(result.assets[0].uri, ToastAndroid.LONG);
         setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append('image', {
      uri: image,
      type: 'image/jpeg',
      name: 'image.jpg',
    });

    try {
      const response = await axios.post('http://192.168.1.16/upload.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer(); }} >
            <Badge label="Open Drawer Content" type="primary" size={12} />
        </TouchableOpacity>

      <Text style={styles.title}>Upload an Image</Text>
      {image && <Image source={{ uri: image }} style={{ width: 400, height: 300, resizeMode:'cover', marginBottom: 20 }} />}
      <Button title="Pick an image" onPress={pickImage} />
      {image && <Button title="Upload" onPress={uploadImage} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});