<?php

// Set headers to allow CORS
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.account.info.php';
require_once './../mail-templates/account-created.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';
require_once './../utils/Math.php';

function ttAvailable($val){
 $value = intval($val);
 $day = (($value>1)?($value.' hours'):(($value==1)?($value.' hour'):'NOT_AVAILABLE'));
 return $day;
};

if($_GET["action"]=='USER_VALIDATE_EMAIL' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );	
  $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"]; }
  $query = $userAccountModule->query_validate_userEmail($email);
  $data = json_decode( $database->getJSONData($query) );
  $status = 'NOT_EXIST';
  if(count($data)>0){ $status = 'EXIST'; }
  echo $status;
}
else if($_GET["action"]=='USER_REGISTER' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 generateUserId:
 	$userId=generateNumber(15); // Generate Unique Code
 	$query = $userAccountModule->query_check_userAccount($userId);
 	$database->getJSONData($query);
 	$data = json_decode( $database->getJSONData($query) );
 	if(intVal($data[0]->{"count(*)"})>0){ goto generateUserId; }

 $surname = ''; if( array_key_exists("surname", $htmlData) ){ $surname = $htmlData["surname"]; }
 $name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"];   }
 $gender = ''; if( array_key_exists("gender", $htmlData) ){ $gender = $htmlData["gender"];  }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
 $accPwd = ''; if( array_key_exists("pwd", $htmlData) ){ $accPwd = $htmlData["pwd"];  }
 $avatar = ''; if( array_key_exists("avatar", $htmlData) ){ $avatar = $htmlData["avatar"];  }
 $locality = ''; if( array_key_exists("locality", $htmlData) ){ $locality = $htmlData["locality"];  }
 $location = ''; if( array_key_exists("location", $htmlData) ){ $location = $htmlData["location"]; }
 $state = ''; if( array_key_exists("state", $htmlData) ){ $state = $htmlData["state"];   }
 $country = ''; if( array_key_exists("country", $htmlData) ){ $country = $htmlData["country"];  }
 $query = $userAccountModule->query_add_userAccount($userId, $surname, $name, $gender, $email, $accPwd, $avatar, 
 	$locality, $location, $state, $country);
 $params = [
	"userId" => "$userId",
	"surname" => "$surname",
	"name" => "$name",
	"gender" => "$gender",
	"email" => "$email",
	"pwd" => "$accPwd",
	"avatar" => "$avatar",
	"locality" => "$locality",
	"location" => "$location",
	"state" => "$state",
	"country" => "$country"
 ];
 $status = $database->addupdateData($query);
 $message = 'New User Created Successfully';
 if($status === 'Error') { $message = 'Query Failed'; }
 else {
	// Send Success Email to User as he was registered Successfully.
	$data = '{'.
    '"from":{ "name":"'.$APP_PROPERTIES["PROJ_APP_NAME"].'", "email":"'.$APP_PROPERTIES["PROJ_APP_EMAIL"].'" },'.
    '"to":[{ "name":"'.$surname.' '.$name.'", "email":"'.$email.'" }]'.
    '}';
  	$body =AccountConfirmationMail($surname.' '.$name, $email);
  	sendMail($data, $APP_PROPERTIES["EMAIL_SUBJ_ACCOUNT_CREATED"], $body);
 }
 $result = [
	"status" => "$status",
	"message" => "$message",
	"params" => $params
 ];
 echo json_encode( $result );
} 
else if($_GET["action"]=='USER_LOGIN' && $_SERVER['REQUEST_METHOD']=='POST'){
	$htmlData = json_decode( file_get_contents('php://input'), true );	
	$email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
	$accPwd = ''; if( array_key_exists("pwd", $htmlData) ){ $accPwd = $htmlData["pwd"];  }
	$result = array();
	$status = 'No Record Found';
	if(strlen($email)>0 && strlen($accPwd)>0){

	 $query1 = $userAccountModule->query_view_userAccount($email, $accPwd);
	 $accountData =  json_decode( $database->getJSONData($query1) ); // json_decode()
	 $userId = $accountData[0]->{"userId"};

	 $query2 = $userAccountModule->query_get_userPrepareExam($userId);
	 $prepareExamData = json_decode( $database->getJSONData($query2) ); // json_decode()

	 $examTargetList = array();
	 $examTargetList["examTargetList"] = $prepareExamData;

	 $query3 = $userAccountModule->query_get_timeAvailability($userId);
	 $timeAvailableData = json_decode( $database->getJSONData($query3) );  // json_decode()
	 
	 $timeAvailability = array();
	 $ta='{}';
     if(count($timeAvailableData)>0){
		$ta = array();
		$ta["Sunday"] = ttAvailable($timeAvailableData[0]->{"Sunday"});
		$ta["Monday"] = ttAvailable($timeAvailableData[0]->{"Monday"});
		$ta["Tuesday"] = ttAvailable($timeAvailableData[0]->{"Tuesday"});
		$ta["Wednesday"] = ttAvailable($timeAvailableData[0]->{"Wednesday"});
		$ta["Thursday"] = ttAvailable($timeAvailableData[0]->{"Thursday"});
		$ta["Friday"] = ttAvailable($timeAvailableData[0]->{"Friday"});
		$ta["Saturday"] = ttAvailable($timeAvailableData[0]->{"Saturday"});
	 } else { $ta = json_decode($ta); }
	 $timeAvailability["timeAvailability"]=$ta;

	 $result["params"] = array_merge( (array) $accountData[0], (array) $examTargetList, (array) $timeAvailability );
	 $status = 'Record Found';
	}
	$result["status"] = $status;
	echo json_encode( $result );
}
else if($_GET["action"]=='USER_DETAILS_UPDATE' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $userId = ''; if( array_key_exists("userId", $htmlData) ){ $userId = $htmlData["userId"]; }
 $surname = ''; if( array_key_exists("surName", $htmlData) ){ $surname = $htmlData["surname"]; }
 $uname = ''; if( array_key_exists("name", $htmlData) ){ $uname = $htmlData["name"];   }
 $gender = ''; if( array_key_exists("gender", $htmlData) ){ $gender = $htmlData["gender"];  }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
 $accPwd = ''; if( array_key_exists("accPwd", $htmlData) ){ $accPwd = $htmlData["accPwd"];  }
 $avatar = ''; if( array_key_exists("avatar", $htmlData) ){ $avatar = $htmlData["avatar"];  }
 $locality = ''; if( array_key_exists("locality", $htmlData) ){ $locality = $htmlData["locality"];  }
 $location = ''; if( array_key_exists("location", $htmlData) ){ $location = $htmlData["location"]; }
 $state = ''; if( array_key_exists("state", $htmlData) ){ $state = $htmlData["state"];   }
 $country = ''; if( array_key_exists("country", $htmlData) ){ $country = $htmlData["country"];  }
 $query = $userAccountModule->query_update_userAccount($userId, $surname, $uname, $gender, $email, $accPwd, $avatar, $locality, 
 				$location, $state, $country);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'Updated Record Successfully for userId \''.$userId.'\'';
 if($status === 'Error') { $message = 'Query Failed - []'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
else if($_GET["action"]=='SEND_RESETPASSWORD_EMAIL' && $_SERVER['REQUEST_METHOD']=='POST'){
	$htmlData = json_decode( file_get_contents('php://input'), true );
	$to ='';if( array_key_exists("to", $htmlData) ){ $to = $htmlData["to"];  }
	// Get projectName, projectLogo, from, subject, emailExpiryTime from Properties File
	global $APP_PROPERTIES;
	$PROJ_APP_EMAIL = $APP_PROPERTIES["PROJ_APP_EMAIL"];
	$EMAIL_SUBJ_FORGOTPWD = $APP_PROPERTIES["EMAIL_SUBJ_FORGOTPWD"];
	// TODO: Using "to" email - Get the Customer Timezone, Customer Name and Customer ID
	$query = $userAccountModule->query_validate_userEmail($to);
	$data = json_decode( $database->getJSONData($query) );
	$status=array();
	if( count($data)>0 ){
		$customerId = $data[0]->{'user_id'};
		$customerName = $data[0]->{'user'};
		require_once './../mail-templates/password-change.php';
		$body = generateHTML($customerId, $customerName, $to);
		$dataString = '{"from":{ "name":"UPSC Preparation Network", "email":"'.$PROJ_APP_EMAIL.'" },'.
				'"to":[{ "name":"'.$customerName.'", "email":"'. $to.'" }]}';
		$msgId = sendMail($dataString, $EMAIL_SUBJ_FORGOTPWD, $body);
		$status["message"]=$msgId;
    }
    echo json_encode($status);
}
else if($_GET["action"]=='USER_PREPARE_PLAN' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );
 $examTargetList = '';if( array_key_exists("examTargetList", $htmlData) ){ $examTargetList = $htmlData["examTargetList"];  }
 $timeAvailability = '';if( array_key_exists("timeAvailability", $htmlData) ){ $timeAvailability = $htmlData["timeAvailability"];  }

 // INSERT OR UPDATE DUPLICATE "user_id" KEY
 print_r($examTargetList);
 print_r($timeAvailability);
}