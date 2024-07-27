<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: 192.168.1.2");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.account.addr.php';

// $_SERVER['REQUEST_METHOD'] 
if($_GET["action"]=='USER_ADDRESS_ADD' && $_SERVER['REQUEST_METHOD']=='POST'){
 $userAddressArry = json_decode( file_get_contents('php://input'), true );	
 $query = $userAddressModule->query_add_userAddress($userAddressArry);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'New Address added Successfully';
 if(count($userAddressArry)>1){ $message = 'New Addresses added Successfully'; }
 if($status === 'Error') { $message = 'Query Failed - [userId is Required Field to add User Address]'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
} 
else if($_GET["action"]=='USER_ADDRESS_UPDATE' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $addressId = ''; if( array_key_exists("addressId", $htmlData) ){ $addressId = $htmlData["addressId"]; }
 $userId = ''; if( array_key_exists("userId", $htmlData) ){ $userId = $htmlData["userId"];   }
 $aliasName = ''; if( array_key_exists("aliasName", $htmlData) ){ $aliasName = $htmlData["aliasName"];  }
 $addressLine1 = ''; if( array_key_exists("addressLine1", $htmlData) ){ $addressLine1 = $htmlData["addressLine1"];  }
 $addressLine2 = ''; if( array_key_exists("addressLine2", $htmlData) ){ $addressLine2 = $htmlData["addressLine2"];  }
 $locality = ''; if( array_key_exists("locality", $htmlData) ){ $locality = $htmlData["locality"];  }
 $location = ''; if( array_key_exists("location", $htmlData) ){ $location = $htmlData["location"];  }
 $city = ''; if( array_key_exists("city", $htmlData) ){ $city = $htmlData["city"];  }
 $state = ''; if( array_key_exists("state", $htmlData) ){ $state = $htmlData["state"];  }
 $country = ''; if( array_key_exists("country", $htmlData) ){ $country = $htmlData["country"]; }
 $postalCode = ''; if( array_key_exists("postalCode", $htmlData) ){ $postalCode = $htmlData["postalCode"];   }
 $landmark = ''; if( array_key_exists("landmark", $htmlData) ){ $landmark = $htmlData["landmark"];  }
 $query = $userAddressModule->query_update_userAddress($addressId, $userId, $aliasName, $addressLine1, $addressLine2, $locality, $location, 
  $city, $state, $country, $postalCode, $landmark);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'Updated Record Successfully for addressId \''.$addressId.'\'';
 if($status === 'Error') { $message = 'Query Failed - []'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
else if($_GET["action"]=='USER_ADDRESS_DELETE' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 if(count($htmlData)>0){
  $addressId = ''; if( array_key_exists("addressId", $htmlData) ){ $addressId = $htmlData["addressId"]; }
  $query = $userAddressModule->query_delete_userAddress($addressId);
  $result = array();
  $status = $database->addupdateData($query);
  $message = 'Address deleted Successfully';
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
else if($_GET["action"]=='USER_ADDRESS_LIST'){ // List of Address of a particular User
 $userId = $_GET["userId"];
 $query = $userAddressModule->query_list_userAddress($userId);
 echo $database->getJSONData($query);
}




