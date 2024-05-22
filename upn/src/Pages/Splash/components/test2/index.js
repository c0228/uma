import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import RNFS from 'react-native-fs';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';


const Test2 = ()=>{
   const [htmlContent, setHtmlContent] = useState({ html: '' });
   const secretKey = 'SECRET_KEY';
   const { width } = useWindowDimensions();
   const downloadHtmlFile = async (url) => {
      try {
        const axiosInstance = axios.create({
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0'
            }
        });
        const response = await axiosInstance.get(url);
        const htmlContent = response.data;
        return htmlContent;
      } catch (error) {
        console.error('Error downloading the HTML file:', error);
      }
    };

   const storeEncryptedFile = async (content, fileName) => {
      const path = `${RNFS.ExternalDirectoryPath}/${fileName}`;
      try {
        await RNFS.writeFile(path, content);
        console.log('File saved successfully at:', path);
      } catch (error) {
        console.error('Error saving the file:', error);
      }
      return path;
   };

    
  const process = async()=>{
    const url = 'http://192.168.1.10/upn-html/index.html';
    const htmlContent = await downloadHtmlFile(url);
    if(htmlContent) {
          console.log('Downloaded HTML content successfully');
          // Encrypt 
          const content = btoa(htmlContent);
          console.log('Encrypted Content', content);
          // Store
         const path = await storeEncryptedFile(content, 'testFile.html');
         console.log('Encrypted File ', path);
         // Read
         try {
         const decryptCode = await RNFS.readFile(path);
         console.log('decryptCode', decryptCode);
         const htmlSource = atob(decryptCode);
         console.log("File contents:", htmlSource);

         const source = { html: htmlSource };
         setHtmlContent( source );
         } catch(error){
          console.log(error);
         }
    }
  };
   useEffect(()=>{
    process();
     
   },[]);


 return (<View>
    <Text>Test2 Page</Text>
    <RenderHtml
      contentWidth={width}
      source={htmlContent} />
 </View>);
};

export default Test2;
