<?php
// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.app.settings.php';
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
?>