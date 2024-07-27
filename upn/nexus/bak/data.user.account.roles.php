<?php
class UserRolesModule {
    function query_add_userRoles($userRolesArry){
	  $sql = "INSERT INTO user_accounts_roles (".implode(", ",array_keys($userRolesArry[0])).") VALUES";
	  foreach ($userRolesArry as $row) {
		$sql.=" ('".implode("', '", $row)."'),";
	  }
	  return chop($sql,",");
    }
    function query_view_userRoles(){
		return "SELECT * FROM user_accounts_roles";
    }
}

$userRolesModule = new UserRolesModule();
