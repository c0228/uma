
export const RemoveItemsFromArray = (actualArray, removeList) =>{
    return actualArray.filter(item => !removeList.includes(item));
 };
 
 export const ExcludeFromJSON = (actualJSON, removeKeys) =>{
  const filteredJSON = {};
  for (const key in actualJSON) {
   if (!removeKeys.includes(key)) {
     filteredJSON[key] = actualJSON[key];
   }
  }
  return filteredJSON;
 };