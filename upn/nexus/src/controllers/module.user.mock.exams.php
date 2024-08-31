<?php

// Set headers to allow CORS
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.mock.exams.php';
require_once './../mail-templates/account-created.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';
require_once './../utils/Math.php';

/*******************************************************************************************/
/****************************** MANAGE SUBJECTS ********************************************/
/*******************************************************************************************/
// 1. Add New Subject Form
if($_GET["action"]=='EXAM_SUBJECT_LIST' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $exams = ''; if( array_key_exists("exams", $htmlData) ){ $exams = $htmlData["exams"]; }
 $query = $mockExamModule->query_get_listOfSubjectsByExam($exams);
 $data = json_decode( $database->getJSONData($query) );
 $status = array();
 $status["subjects"] = $data;
 echo json_encode($status);
}
else if($_GET["action"]=='ADD_NEW_SUBJECT' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );	
  $subject = ''; if( array_key_exists("subject", $htmlData) ){ $subject = $htmlData["subject"]; }
  $exams = ''; if( array_key_exists("exams", $htmlData) ){ $exams = $htmlData["exams"]; }
  $query = $mockExamModule->query_add_examSubjects($subject,$exams);
  $status = $database->addupdateData($query);
  $message = 'New Subject added to the List Successfully';
  if($status === 'Error') { $message = 'Query Failed'; }
  $result = ["status" => "$status", "message" => "$message" ];
  echo json_encode( $result );
}
// 2. View Subjects List
else if($_GET["action"]=='SUBJECT_LIST' && $_SERVER['REQUEST_METHOD']=='GET'){
  $query = $mockExamModule->query_get_subjectsList();
  $result = array();
  $result["data"] =  json_decode( $database->getJSONData($query) );
  echo json_encode($result);
}
// 3. Update Existing Subject
else if($_GET["action"]=='SUBJECT_UPDATE' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );	
  $newSubjectName = ''; if( array_key_exists("newSubjectName", $htmlData) ){ $newSubjectName = $htmlData["newSubjectName"]; }
  $oldSubjectName = ''; if( array_key_exists("oldSubjectName", $htmlData) ){ $oldSubjectName = $htmlData["oldSubjectName"]; }
  $exams = ''; if( array_key_exists("exams", $htmlData) ){ $exams = $htmlData["exams"]; }
  $query = $mockExamModule->query_update_existingSubject($newSubjectName, $oldSubjectName, $exams);
  $status = $database->addupdateData($query);
  $message = 'Updated Subject Details Successfully';
  if($status === 'Error') { $message = 'Query Failed'; }
  $result = ["status" => "$status", "message" => "$message" ];
  echo json_encode( $result );
}
// 4. Delete Existing Subject
else if($_GET["action"]=='SUBJECT_DELETE' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $subject = ''; if( array_key_exists("subject", $htmlData) ){ $subject = $htmlData["subject"]; }
  $query = $mockExamModule->query_delete_existingSubject($subject);
  $status = $database->addupdateData($query);
  $message = 'Deleted Subject Details Successfully';
  if($status === 'Error') { $message = 'Query Failed'; }
  $result = ["status" => "$status", "message" => "$message" ];
  echo json_encode( $result );
}
/*******************************************************************************************/
/******************************** MANAGE TOPICS ********************************************/
/*******************************************************************************************/
// 1. List of Topics
else if($_GET["action"]=='SUBJECT_TOPICS_LIST' && $_SERVER['REQUEST_METHOD']=='GET'){
 // GET Topics and SubTopics List in a Hierarchy
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $subject = ''; if( array_key_exists("subject", $htmlData) ){ $subject = $htmlData["subject"]; }
 $query1 = $mockExamModule->query_get_listOfTopicsBySubject($subject);
 $data1 = json_decode( $database->getJSONData($query1) );
 $status = array();
 if(count($data1)>0){
    $status1 = [];
    foreach ($data1 as $row1){
      $topicId = $row1->{"topic_id"};
      $query2 = $mockExamModule->query_get_listOfSubTopicsByTopic($topicId);
      $data2 = json_decode( $database->getJSONData($query2) );
      $row1->{"subtopics"} = $data2;
      $status1[] = $row1;
    }
    $status[$subject] = $status1;
 }
 echo json_encode($status);
}

else if($_GET["action"]=='ADD_SUBJECT_TOPICS' && $_SERVER['REQUEST_METHOD']=='POST'){

}
else if($_GET["action"]=='ADD_SUBJECT_SUBTOPICS' && $_SERVER['REQUEST_METHOD']=='POST'){

}
else if($_GET["action"]=='ADD_EXAM_QA' && $_SERVER['REQUEST_METHOD']=='POST'){

}
