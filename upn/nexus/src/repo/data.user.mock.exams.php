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
 function query_get_listOfTopicsBySubject($subject){
  return "SELECT topic_id, topic FROM app_subjects_mtopic WHERE subject='".$subject."';";
 }
 function query_get_listOfSubTopicsByTopic($topicId){
  return "SELECT stopic_id, subtopic FROM app_subjects_stopic WHERE topic_id='".$topicId."';";
 }
}
$mockExamModule = new MockExamModule();