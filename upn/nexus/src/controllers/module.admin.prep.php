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
  $database->getJSONData($query);
  $result = array();
  $result["data"] =  json_decode( $database->getJSONData($query) );
  echo json_encode($result);
} else if($_GET["action"]=='SUBJECT_LIST' && $_SERVER['REQUEST_METHOD']=='GET'){
    $query = $adminPrepModule->query_get_subjectsList();
    $database->getJSONData($query);
    $result = array();
    $result["data"] =  json_decode( $database->getJSONData($query) );
    echo json_encode($result);
  }