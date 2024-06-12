<?php
// Set headers to allow CORS
session_start();
session_destroy();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.app.settings.php';
require_once './../mail-templates/send-otpcode.php';
require_once './../utils/Mail.php';
require_once './../utils/Masking.php';
require_once './../utils/Math.php';

if($_GET["action"]=='ADD_FCM_TOKEN' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $deviceId = ''; if( array_key_exists("deviceId", $htmlData) ){ $deviceId = $htmlData["deviceId"];   }
 $token = ''; if( array_key_exists("token", $htmlData) ){ $token = $htmlData["token"];   }
 if(strlen($deviceId)===0){
  generateDeviceId:
   $deviceId=generateCode(25);
   $query = $appSettings->query_verify_deviceId($deviceId);
   $database->getJSONData($query);
   $data = json_decode( $database->getJSONData($query) );
   if(intVal($data[0]->{"count(*)"})>0){ goto generateDeviceId; }
 }
 $query = $appSettings->query_add_fcmToken($deviceId,$token);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'Added Device to Database Successfully';
 if($status === 'Error') { $message = 'Query Failed'; }
 $params = array();
 $params["deviceId"] = $deviceId;
 $params["token"] = $token;
 $result["status"] = $status;
 $result["params"] =  $params;
 $result["message"] = $message;
 echo json_encode( $result );
}
else if($_GET["action"]=='SEND_OTPCODE' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"]; }
  $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"]; }
  $deviceId = ''; if( array_key_exists("deviceId", $htmlData) ){ $deviceId = $htmlData["deviceId"]; }
  // Get OTPCode and LastUpdated from database
  $viewQuery = $appSettings->query_view_otpcode($deviceId);
  $data = json_decode( $database->getJSONData($viewQuery) );
  $otpcode = '';
  $status='Success';
  if(count($data)>0){ // If LastUpdated is less than 10 Minutes, share same OTP Code
    $encryptedOtpcode = $data[0]->{'otpcode'};
    $otpcode = $masking->decrypt($encryptedOtpcode,$deviceId); // Encryption and Decryption can be added
  } else { // If LastUpdated is greator than 10 minutes, share new OTP Code
     $otpcode = generateNumber();
     $encryptedOtpcode = $masking->encrypt($otpcode,$deviceId);
     $query = $appSettings->query_add_otpcode($deviceId,$encryptedOtpcode);
     $status = $database->addupdateData($query);
  }
  // Generate an Email to Send to the Customer
  $data = '{'.
    '"from":{ "name":"'.$APP_PROPERTIES["PROJ_APP_NAME"].'", "email":"'.$APP_PROPERTIES["PROJ_APP_EMAIL"].'" },'.
    '"to":[{ "name":"'.$name.'", "email":"'.$email.'" }]'.
    '}';
  $body = generateHTML($otpcode, $name, $email);
  sendMail($data, $APP_PROPERTIES["EMAIL_SUBJ_SEND_OTPCODE"], $body);
  // Display API Response 
  $result = array();
  if($status === 'Error') { $message = 'Query Failed'; }
  $result["status"] = $status;
  $result["message"] = 'OTP Code sent Successfully';
  echo json_encode( $result );
}
else if($_GET["action"]=='VERIFY_OTPCODE' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $deviceId = ''; if( array_key_exists("deviceId", $htmlData) ){ $deviceId = $htmlData["deviceId"]; }
  $otpcode = ''; if( array_key_exists("otpcode", $htmlData) ){ $otpcode = $htmlData["otpcode"]; }
   // Get OTPCode from database based on DeviceId
   $viewQuery = $appSettings->query_view_otpcode($deviceId);
   $data = json_decode( $database->getJSONData($viewQuery) );
   $result = array();
   if(count($data)>0){ // If Device exists, Get OTPCode
    $encryptedOtpcode = $data[0]->{'otpcode'};
    $dbOtpcode = $masking->decrypt($encryptedOtpcode,$deviceId); // Encryption and Decryption can be added
    if(strcmp($otpcode,$dbOtpcode)==0){ // If User OTPCode and Database OTPCode matches
      $result["status"] = 'Success';
      $result["message"] = 'OTP Code Successfully Verified';
    } else { // If User OTP Code and Database OTPCode doesn't matches
      $result["status"] = 'Failed';
      $result["message"] = 'OTP Code doesn\'t Match ';
    }
   } else { // If Device not exists in the Database
      $result["status"] = 'Failed';
      $result["message"] = 'User doesn\'t Registered';
   }
   echo json_encode( $result );
} else if($_GET["action"]=='CJ_CLEAN_OTPCODE'){
    $deleteQuery = $appSettings->query_delete_otpcode();
    $result = array();
    $result["status"] = $database->addupdateData($deleteQuery);
    $result["message"] = 'Successfully Cleaned Unrequired OTPCode Space in Database';
    echo json_encode( $result );
}
?>