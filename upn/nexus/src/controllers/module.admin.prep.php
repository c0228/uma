<?php

// Set headers to allow CORS
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.admin.prep.php';
require_once './../mail-templates/account-created.php';
require_once './../utils/Mail.php';
require_once './../utils/DateTime.php';
require_once './../utils/Math.php';

if($_GET["action"]=='EXAMS_LIST' && $_SERVER['REQUEST_METHOD']=='GET'){
  $query = $adminPrepModule->query_get_examsList();
  $result = array();
  $result["data"] =  json_decode( $database->getJSONData($query) );
  echo json_encode($result);
}
else if($_GET["action"]=='TOPICS_LIST' && $_SERVER['REQUEST_METHOD']=='POST'){
  $htmlData = json_decode( file_get_contents('php://input'), true );
  $subject = '';if( array_key_exists("subject", $htmlData) ){ $subject = $htmlData["subject"];  }
  $query = $adminPrepModule->query_get_topicsList($subject);
  $result = array();
  $result["topics"] =  json_decode( $database->getJSONData($query) );
  echo json_encode($result);
} 