<?php
class AdminPrepModule {
 function query_get_examsList(){
  return "SELECT * FROM app_exam_list";
 }
 function query_get_subjectsList(){
  return "SELECT * FROM app_subjects_list";
 }
 function query_get_topicsList($subject){
  return "SELECT m.topic_id, m.topic, m.subject, m.seq, ".
  "(SELECT count(*) FROM app_subjects_stopic s WHERE s.topic_id=m.topic_id) As subtopics ".
  "FROM app_subjects_mtopic m WHERE m.subject='".$subject."' ORDER BY m.seq ASC;";
 }
}
$adminPrepModule = new AdminPrepModule();