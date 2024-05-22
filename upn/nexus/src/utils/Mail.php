<?php

function sendMail($from,$to,$subject,$body){
 $headers = "MIME-Version: 1.0" . "\r\n";
 $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
 $headers .= "From: ".$from. "\r\n";
 $result = array();
 $status = "Failed to send email";
 if(mail($to, $subject, $body, $headers)) {
  $status = "Email sent successfully!";
 }
 $result["status"] = $status;
 return $result;
}