import axios from 'axios';

const readHtmlFile = async (url) => {
 let htmlContent;
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
      htmlContent = response?.data;
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

export const DownloadRemoteHTML = async(url, storageLocation)=>{
    const url = 'http://192.168.1.10/upn-html/index.html';
    const htmlContent = await readHtmlFile(url);
    if(htmlContent) {
          console.log('Downloaded HTML content successfully');
          // Encrypt 
          const content = btoa(htmlContent);
          console.log('Encrypted Content', content);
          // Store
         const path = await storeEncryptedFile(content, storageLocation); // storageLocation='testFile.html'
         console.log('Encrypted File ', path);
    }
};

export const DisplayLocalHTML = async(storageLocation) =>{ // Read
 try {
    const decryptCode = await RNFS.readFile(storageLocation);
    console.log('decryptCode', decryptCode);
    const htmlSource = atob(decryptCode);
    console.log("File contents:", htmlSource);

    const source = { html: htmlSource };
    setHtmlContent({ ...htmlContent, source });
 } catch(error){
    console.log(error);
 }
}; 