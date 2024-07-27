<?php
class UserAccountModule {
 function query_add_userAccount($userId, $surname, $name, $gender, $email, $accPwd, $avatar, $locality, $location, $state, $country){
  return "INSERT INTO user_accounts_auth(user_id, surname, uname, gender, email_id, acc_pwd, avatar, locality, ".
	"location, state, country) VALUES ('".$userId."', '".$surname."', '".$name."', '".$gender."', '".$email."', '".
	$accPwd."', '".$avatar."', '".$locality."', '".$location."', '".$state."', '".$country."');";
 }
  function query_view_userAccount($email,$accPwd){
	$sql = "SELECT user_id As userId, surname, uname As name, gender, age, email_id As email, acc_pwd As pwd, avatar, locality, ".
	"location, state, country, created_on As createdOn, last_updated As lastUpdated FROM user_accounts_auth WHERE ".
	"email_id='".$email."' AND acc_pwd='".$accPwd."';";  
	return $sql;
  }
  function query_validate_userEmail($email){
	return "SELECT user_id, CONCAT(surname,' ',uname) As user FROM user_accounts_auth WHERE email_id='".$email."';"; 
  }
  function query_check_userAccount($userId){
   return "SELECT count(*) FROM user_accounts_auth WHERE user_id='".$userId."';";
  }
  function query_update_userAccount($userId, $surname, $uname, $gender, $email, $accPwd, $avatar, $locality, 
  	$location, $state, $country){
	$sql="UPDATE user_accounts_auth SET";
	if(strlen($surname)>0){ $sql.=" surname='".$surname."',"; }
	if(strlen($uname)>0){ $sql.=" uname='".$uname."',"; }
	if(strlen($gender)>0){ $sql.=" gender='".$gender."',"; }
	if(strlen($email)>0){ $sql.=" email_id='".$email."',"; }
	if(strlen($accPwd)>0){ $sql.=" acc_pwd='".$accPwd."',"; }
	if(strlen($avatar)>0){ $sql.=" avatar='".$avatar."',"; }
	if(strlen($locality)>0){ $sql.=" locality='".$locality."',"; }
	if(strlen($location)>0){ $sql.=" location='".$location."',"; }
	if(strlen($state)>0){ $sql.=" state='".$state."',"; }
	if(strlen($country)>0){ $sql.=" country='".$country."',"; }
	$sql=chop($sql,",")." WHERE user_id=".$userId.";";
	return $sql;
  }
}

$userAccountModule = new UserAccountModule();