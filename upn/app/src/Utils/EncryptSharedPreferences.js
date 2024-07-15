import EncryptedStorage from 'react-native-encrypted-storage';

export const AddToSPStore = async(key, value)=>{
 try {
    await EncryptedStorage.setItem(key, JSON.stringify(value));
 } catch (error) {
    console.error('Error storing auth status:', error);
 }
};

export const getFromSPStore = async(key)=>{
 try {
    const value = await EncryptedStorage.getItem(key);
    if (value !== null) {
      try {
         return JSON.parse(value);
      } catch (error) {
         return value;
      }
    }
    return ''; // Default value if no value is stored
 } catch (error) {
    console.error('Error retrieving auth status:', error);
    return '';
 }
};

export const deleteFromSPStore = async(key) =>{
 try {
    await EncryptedStorage.removeItem(key);
 } catch (error) {
    console.error('Error removing auth status:', error);
 }
};