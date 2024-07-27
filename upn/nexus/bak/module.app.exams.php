<?php

// Set headers to allow CORS
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.app.exams.php';
require_once './../mail-templates/account-created.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';
require_once './../utils/Math.php';

if($_GET["action"]=='USER_EXAMS_TT' && $_SERVER['REQUEST_METHOD']=='POST'){

}
/*
if($_GET["action"]=='USER_EXAMS_LIST' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );	
  $age = ''; if( array_key_exists("age", $htmlData) ){ $age = $htmlData["age"]; }
  $eduDegreeCompleted = ''; if( array_key_exists("eduDegreeCompleted", $htmlData) ){ $eduDegreeCompleted = $htmlData["eduDegreeCompleted"]; }
  $eduSpecializationCompleted = ''; if( array_key_exists("eduSpecializationCompleted", $htmlData) ){ $eduSpecializationCompleted = $htmlData["eduSpecializationCompleted"]; }
  $eduDegreeCurrent = ''; if( array_key_exists("eduDegreeCurrent", $htmlData) ){ $eduDegreeCurrent = $htmlData["eduDegreeCurrent"]; }
  $eduSpecializationCurrent = ''; if( array_key_exists("eduSpecializationCurrent", $htmlData) ){ $eduSpecializationCurrent = $htmlData["eduSpecializationCurrent"]; }
  $eduDegreePlanned = ''; if( array_key_exists("eduDegreePlanned", $htmlData) ){ $eduDegreePlanned = $htmlData["eduDegreePlanned"]; }
  $eduSpecializationPlanned = ''; if( array_key_exists("eduSpecializationPlanned", $htmlData) ){ $eduSpecializationPlanned = $htmlData["eduSpecializationPlanned"]; }

  // LOGIC:
  //  -> Get List of Exams, he is eligible for.
  //  -> For these Exams filter with age.
  //  -> This gives Final Exam List and their Subjects too.

  // 1. Get List of Exams, he is eligible for 
  $query1 = $appExams->query_get_examsByCourse($eduDegreeCompleted, $eduSpecializationCompleted, 
                $eduDegreeCurrent, $eduSpecializationCurrent, $eduDegreePlanned, $eduSpecializationPlanned);
  $examsList = [];
  $examsByCourse = json_decode( $database->getJSONData($query1) );
  foreach ($examsByCourse as $course) {
    $examsList = array_merge($examsList, explode('|', $course->exams));
  }
  $examsList = array_unique($examsList);

  //  2. For these Exams filter with age
  $query2 = $appExams->query_get_examsByAge($age, $examsList);
  $examsByAge = json_decode( $database->getJSONData($query2) );

  // 3. This gives Final Exam List and their Subjects too
  $query3 = $appExams->query_get_examsBySubject($examsList);
  $subjects = json_decode( $database->getJSONData($query3) );

  // 4. Final
  $data = [
	"courses" => $examsByCourse,
	"eligibleExams" => $examsByAge,
    "subjects" => $subjects
 ];
 echo json_encode( $data );
} */
?>