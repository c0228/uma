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
 
}