<?php
class AppSettings {
 function query_verify_deviceId($deviceId){
  return "SELECT count(*) FROM mq_user_devices WHERE device_id='".$deviceId."';";
 }
 function query_add_fcmToken($deviceId,$token){
  return "INSERT INTO mq_user_devices(device_id, fcm_id) VALUES ('".$deviceId."','".$token."') ".
    "ON DUPLICATE KEY UPDATE fcm_id = VALUES(fcm_id);";
 }
 function query_add_otpcode($deviceId,$otpcode){
  return "INSERT INTO mq_user_otpcode(device_id, otpcode) VALUES ('".$deviceId."','".$otpcode."') ".
   "ON DUPLICATE KEY UPDATE otpcode = VALUES(otpcode);";
 }
 function query_view_otpcode($deviceId){
  return "SELECT otpcode, last_updated FROM mq_user_otpcode WHERE device_id='".$deviceId.
   "' AND last_updated > NOW() - INTERVAL 10 MINUTE;";
 }
 function query_delete_otpcode($deviceId){
  return "DELETE FROM mq_user_otpcode WHERE device_id='".$deviceId."';";
 }
 function query_deleteAll_otpcode(){
  return "DELETE FROM mq_user_otpcode WHERE last_updated < NOW() - INTERVAL 20 MINUTE;";
 }
}
$appSettings = new AppSettings();
?> 