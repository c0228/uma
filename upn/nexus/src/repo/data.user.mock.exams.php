<?php
class MockExamModule {
 /** MANAGE SUBJECTS **/ 
 // 1. Add New Subject Form
 function query_get_listOfSubjectsByExam($exams){
  if (empty($exams)) { return ""; }
  $sql="SELECT * FROM app_subjects_list WHERE";
  foreach ($exams as $exam) {
   $sql.=" exam LIKE '%".$exam."%' OR";
  }
  $sql=chop($sql,' OR').';';
  return $sql;
 }
 function query_add_examSubjects($subject,$exam){
  return "INSERT INTO app_subjects_list(subject, exam) VALUES ('".$subject."','".$exam."');";
 }
 // 2. View Subjects List 
 function query_get_subjectsList(){
  return "SELECT * FROM app_subjects_list";
 }
 // 3. Update Existing Subject
 function query_update_existingSubject($newSubjectName, $oldSubjectName, $exam){
  $sql="UPDATE app_subjects_list SET subject='".$newSubjectName."', exam='".$exam."' WHERE subject='".$oldSubjectName."';";
  return $sql;
 }
 // 4. Delete Existing Subject
 function query_delete_existingSubject($subject){
  return "DELETE FROM app_subjects_list WHERE subject='".$subject."';";
 }
 /** MANAGE TOPICS **/ 
 // 1. List of Topics
 function query_get_listOfTopicsBySubject($subject){
  return "SELECT topic_id, topic FROM app_subjects_mtopic WHERE subject='".$subject."';";
 }
 function query_get_listOfSubTopicsByTopic($topicId){
  return "SELECT stopic_id, subtopic FROM app_subjects_stopic WHERE topic_id='".$topicId."';";
 }
 // 2. Add / New Update Topic based on TopicIds
 function query_cu_subjectTopics($topic, $subject, $seq){
  $sql="INSERT INTO app_subjects_mtopic(topic, subject, seq) VALUES ('".$topic."','".$subject."','".$seq."') ";
  $sql.="ON DUPLICATE KEY UPDATE topic = VALUES(topic), subject = VALUES(subject), seq = VALUES(seq);";
  return $sql;
 }
 function query_add_subjectTopics($topic,$subject){
  return "INSERT INTO app_subjects_mtopic(topic, subject) VALUES ('".$topic."','".$subject."');";
 }
 function query_add_subjectSubTopics($topicId,$subtopic){
  return "INSERT INTO app_subjects_stopic(topic_id, subtopic) VALUES ('".$topicId."','".$subtopic."');";
 }
 function query_add_examQA($stopicId,$q,$optA,$optB,$optC,$optD,$ans){
  return "INSERT INTO app_subjects_mock(stopic_id, q, opt_a, opt_b, opt_c, opt_d, ans) ".
  "VALUES ('".$stopicId."','".$q."','".$optA."','".$optB."','".$optC."','".$optD."','".$ans."');";
 }
}
$mockExamModule = new MockExamModule();