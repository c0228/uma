<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');
//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.account.roles.php';

if($_GET["action"]=='USER_ROLES_ADD' && $_SERVER['REQUEST_METHOD']=='POST'){
 $userRolesArry = json_decode( file_get_contents('php://input'), true );	
 $query = $userRolesModule->query_add_userRoles($userRolesArry);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'New User Role Created Successfully';
 if(count($userRolesArry)>1){ $message = 'New User Roles Created Successfully'; }
 if($status === 'Error') { $message = 'Query Failed - []'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
else if($_GET["action"]=='USER_ROLES_VIEW'){
 $query = $userRolesModule->query_view_userRoles();
 echo $database->getJSONData($query);
}