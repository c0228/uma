import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Progress from 'react-native-progress';
import RNFS from 'react-native-fs';
import RenderHtml from 'react-native-render-html';

const DynamicPage = () =>{
 const [progress, setProgress] = useState(0);
 const [isDownloading, setIsDownloading] = useState(false);
 const [fileContent, setFileContent] = useState('');
 const downloadUrl = 'http://192.168.1.10/dynamic-page/sample.html'; // Replace with your HTML file URL
 const downloadDest = `${RNFS.ExternalDirectoryPath}/sample.html`;
 const initialize = async()=>{
  await downloadFile(downloadUrl, downloadDest);
  await readFile();
 };
 useEffect(()=>{
  initialize();
 },[]);
 const readFile = async () => {
    const filePath = `${RNFS.ExternalDirectoryPath}/sample.html`; // Replace with your file name
    try {
      const content = await RNFS.readFile(filePath, 'utf8');
      setFileContent(content);
    } catch (err) {
      console.error('Error reading file:', err.message);
      setError('Failed to read file');
    }
 };
 const downloadFile = async(downloadUrl, downloadDest) => {
    setIsDownloading(true);
    RNFS.downloadFile({
      fromUrl: downloadUrl,
      toFile: downloadDest,
      progress: (res) => {
        const percentage = res.bytesWritten / res.contentLength;
        setProgress(percentage);
      },
      progressDivider: 1, // controls how often the progress event is fired
    }).promise
      .then((response) => {
        if (response.statusCode === 200) {
          console.log('File downloaded successfully:', downloadDest);
        } else {
          console.error('Download failed:', response);
        }
      })
      .catch((err) => {
        console.error('Download error:', err);
      })
      .finally(() => {
        setIsDownloading(false);
        setProgress(0); // Reset progress bar
      });
 };
 return (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text>Test</Text>
 </View>);
};

export default DynamicPage;