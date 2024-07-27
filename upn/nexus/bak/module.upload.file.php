<?php
  function viewList($target_dir){
    $fileList = scandir($target_dir);
    $fileList = array_diff($fileList, array('.', '..')); // Remove "." and ".." entries
    $fileList = array_values($fileList);
    return $fileList;
  }
  
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');
  $response = array();
  $target_dir = './../../../uploads/';
  if(isset($_POST["TARGET_DIRECTORY"])){
    $target_dir = $target_dir.$_POST["TARGET_DIRECTORY"];
  }
  if (!is_dir($target_dir)) {  mkdir($target_dir, 0777, true); } // Creates Directory
 
  // List files in the directory and add them to the response
  

  if($_FILES){
    $count = intval($_POST["TARGET_FILES_COUNT"]); 
    for ($i = 0; $i < $count; $i++) {  
      $file_name = $_FILES["TARGET_FILE_".$i]["name"];
      $file_tmp_name = $_FILES["TARGET_FILE_".$i]["tmp_name"];
      $target_file = $target_dir . basename($file_name);
      if(move_uploaded_file($file_tmp_name, $target_file)) {
        array_push($response, array("status" => "FILE_UPLOAD_SUCCESS", "fileName" => $file_name, "listFiles" => viewList($target_dir) ));
      } else {
        array_push($response, array("status" => "FILE_UPLOAD_FAILED", "fileName" => $file_name, "listFiles" => viewList($target_dir) ));
      }
    }
  } else{
      array_push($response, array("status" => "NO_FILES_FOUND","listFiles" => viewList($target_dir) ));
  }

  // Output the response as JSON
  echo json_encode($response);
?>