<?php
class AppSettings {
 function query_verify_deviceId($deviceId){
  return "SELECT count(*) FROM mq_user_devices WHERE device_id='".$deviceId."';";
 }
 function query_add_fcmToken($deviceId,$token){
  return "INSERT INTO mq_user_devices(device_id, fcm_id) VALUES ('".$deviceId."','".$token."') ".
    "ON DUPLICATE KEY UPDATE fcm_id = VALUES(fcm_id);";
 }
}
$appSettings = new AppSettings();
?>