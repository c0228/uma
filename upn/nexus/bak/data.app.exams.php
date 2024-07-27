<?php
class AppExams {

/*  function query_get_examsByCourse($eduDegreeCompleted, $eduSpecializationCompleted, $eduDegreeCurrent, $eduSpecializationCurrent, 
        $eduDegreePlanned, $eduSpecializationPlanned){ // Get List of Exams
  return "SELECT course, specialization, exams FROM app_courses_list WHERE (course='".$eduDegreeCompleted."' AND specialization='".$eduSpecializationCompleted."')".
    " OR (course='".$eduDegreeCurrent."' AND specialization='".$eduSpecializationCurrent."') OR ".
    "(course='".$eduDegreePlanned."' AND specialization='".$eduSpecializationPlanned."');";
 }
 function query_get_examsByAge($age, $examsList) {
  $sql = "SELECT * FROM app_exam_list WHERE (";
  $examConditions = [];
  foreach($examsList as $exam) { $examConditions[] = "exam_id='" . $exam . "'"; }
  $sql.= implode(" OR ", $examConditions);
  $sql.= ") AND age_max >= " . intval($age) . ";";
  return $sql;
 }
 function query_get_examsBySubject($examsList){
  $sql = "SELECT * FROM app_subjects_list WHERE ";
  $examConditions = [];
  foreach($examsList as $exam) { $examConditions[] = "exam LIKE '%" . $exam . "%'"; }
  $sql.= implode(" OR ", $examConditions);
  $sql.= ";";
  return $sql;
 } */

}
$appExams = new AppExams();
?> 