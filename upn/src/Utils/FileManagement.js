import RNFS from 'react-native-fs';
import axios from 'axios';

export const downloadFile = async (url, saveFile) => {
    const path = `${RNFS.ExternalDirectoryPath}/${saveFile}`;
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
      const content = response?.data;
      if(content){
        await RNFS.writeFile( path, btoa(content) );
      }
    } catch (error) {
      console.error('Error downloading the HTML file:', error);
    }
    return path;
};

export const readFile = async(path) =>{
    try {
        const encryptedContent = await RNFS.readFile(path);
        const htmlSource = atob(encryptedContent);
        const source = { html: htmlSource };
        setHtmlContent({ ...htmlContent, source });
    } catch(error){
        console.log(error);
    }
};

