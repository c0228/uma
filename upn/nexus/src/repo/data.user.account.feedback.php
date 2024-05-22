<?php
class UserFeedbackModule {
 function query_add_userFeedback($userFeedbackArry){
   $sql = "INSERT INTO user_accounts_fbk (".implode(", ",array_keys($userFeedbackArry[0])).") VALUES";
   foreach($userFeedbackArry as $row) {
    $sql.=" ('".implode("', '", $row)."'),";
   }
   return chop($sql,",");
 }
 function query_list_userFeedback($userId){
  return "SELECT * FROM user_accounts_fbk WHERE userId=".$userId;
 }
 function query_all_userFeedback(){
  return "SELECT * FROM user_accounts_fbk";
 }
 function query_delete_userFeedback($fbkId){
  return "DELETE FROM user_accounts_fbk WHERE fbkId=".$fbkId;
 }
}

$userFeedbackModule = new UserFeedbackModule();
?>