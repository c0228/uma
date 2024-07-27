<?php
class UserAddressModule {
 function query_add_userAddress($userAddressArry){
   $sql = "INSERT INTO user_accounts_addr (".implode(", ",array_keys($userAddressArry[0])).") VALUES";
   foreach($userAddressArry as $row) {
    $sql.=" ('".implode("', '", $row)."'),";
   }
   return chop($sql,",");
 }
 function query_update_userAddress($addressId, $userId, $aliasName, $addressLine1, $addressLine2, $locality, $location, 
  $city, $state, $country, $postalCode, $landmark){
   $sql="UPDATE user_accounts_addr SET";
   if(strlen($userId)>0){ $sql.=" userId='".$userId."',"; }
   if(strlen($aliasName)>0){ $sql.=" aliasName='".$aliasName."',"; }
   if(strlen($addressLine1)>0){ $sql.=" addressLine1='".md5($addressLine1)."',"; }
   if(strlen($addressLine2)>0){ $sql.=" addressLine2='".$addressLine2."',"; }
   if(strlen($locality)>0){ $sql.=" locality='".$locality."',"; }
   if(strlen($location)>0){ $sql.=" location='".$location."',"; }
   if(strlen($city)>0){ $sql.=" city='".$city."',"; }
   if(strlen($state)>0){ $sql.=" state='".md5($state)."',"; }
   if(strlen($country)>0){ $sql.=" country='".$country."',"; }
   if(strlen($postalCode)>0){ $sql.=" postalCode='".$postalCode."',"; }
   if(strlen($landmark)>0){ $sql.=" landmark='".$landmark."',"; }
   return $sql;
 }
 function query_delete_userAddress($addressId){
  return "DELETE FROM user_accounts_addr WHERE addressId=".$addressId;
 }
 function query_list_userAddress($userId){
  return "SELECT * FROM user_accounts_addr WHERE userId=".$userId;
 }
}

$userAddressModule = new UserAddressModule();