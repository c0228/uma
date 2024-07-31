<?php
class MockExamModule {
 function query_get_listOfSubjectsByExam($exams){
  if (empty($exams)) { return ""; }
  $sql="SELECT * FROM app_subjects_list WHERE";
  foreach ($exams as $exam) {
   $sql.=" exam LIKE '%".$exam."%' OR";
  }
  $sql=chop($sql,' OR').';';
  return $sql;
 }
}
$mockExamModule = new MockExamModule();