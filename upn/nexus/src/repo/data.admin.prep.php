<?php
class AdminPrepModule {
 function query_get_examsList(){
  return "SELECT * FROM app_exam_list";
 }
 function query_get_subjectsList(){
  return "SELECT * FROM app_subjects_list";
 }
 function query_get_topicsList($subject){
  return "SELECT * FROM app_subjects_mtopic WHERE subject='".$subject."' ORDER BY seq;";
 }
}
$adminPrepModule = new AdminPrepModule();