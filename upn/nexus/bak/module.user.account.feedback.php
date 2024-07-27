<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.account.feedback.php';

if($_GET["action"]=='SEND_USER_FEEDBACK' && $_SERVER['REQUEST_METHOD']=='POST'){
 $userFeedbackArry = json_decode( file_get_contents('php://input'), true );	
 $query = $userFeedbackModule->query_add_userFeedback($userFeedbackArry);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'New Feedback added Successfully';
 if(count($userFeedbackArry)>1){ $message = 'New Feedback added Successfully'; }
 if($status === 'Error') { $message = 'Query Failed - [userId is Required Field to add User Feedback]'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
else if($_GET["action"]=='VIEW_MY_FEEDBACK' && $_SERVER['REQUEST_METHOD']=='GET'){
    $userId = $_GET["userId"];
    $query = $userFeedbackModule->query_list_userFeedback($userId);
    echo $database->getJSONData($query);
}
else if($_GET["action"]=='VIEW_ALL_FEEDBACK' && $_SERVER['REQUEST_METHOD']=='GET'){
    $query = $userFeedbackModule->query_all_userFeedback();
    echo $database->getJSONData($query);
}
else if($_GET["action"]=='DELETE_FEEDBACK' && $_SERVER['REQUEST_METHOD']=='POST'){
    $htmlData = json_decode( file_get_contents('php://input'), true );	
    if(count($htmlData)>0){
     $fbkId = ''; if( array_key_exists("fbkId", $htmlData) ){ $fbkId = $htmlData["fbkId"]; }
     $query = $userFeedbackModule->query_delete_userFeedback($fbkId);
     $result = array();
     $status = $database->addupdateData($query);
     $message = 'Feedback deleted Successfully';
     if($status === 'Error') { $message = 'Query Failed - []'; }
     $result["status"] = $status;
     $result["message"] = $message;
     echo json_encode( $result );
    } else {
        $result = array();
        $result["message"] = 'No Request Data Received';
        echo json_encode( $result );
    }
}
?>