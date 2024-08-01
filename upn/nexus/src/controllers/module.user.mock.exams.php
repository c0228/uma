<?php

// Set headers to allow CORS
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.user.mock.exams.php';
require_once './../mail-templates/account-created.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';
require_once './../utils/Math.php';

if($_GET["action"]=='EXAM_SUBJECT_LIST' && $_SERVER['REQUEST_METHOD']=='GET'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $exams = ''; if( array_key_exists("exams", $htmlData) ){ $exams = $htmlData["exams"]; }
 $query = $mockExamModule->query_get_listOfSubjectsByExam($exams);
 $data = json_decode( $database->getJSONData($query) );
 $status = array();
 $status["subjects"] = $data;
 echo json_encode($status);
}
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
else if($_GET["action"]=='ADD_EXAM_SUBJECTS' && $_SERVER['REQUEST_METHOD']=='POST'){

}
else if($_GET["action"]=='ADD_SUBJECT_TOPICS' && $_SERVER['REQUEST_METHOD']=='POST'){

}
else if($_GET["action"]=='ADD_SUBJECT_SUBTOPICS' && $_SERVER['REQUEST_METHOD']=='POST'){

}
else if($_GET["action"]=='ADD_EXAM_QA' && $_SERVER['REQUEST_METHOD']=='POST'){

}
