<?php

require_once './../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


function sendMail($dataString, $subject, $body) {
/*
$data = '{
    "from":{ "name":"Nellutla L N Rao", "email":"nellutlalnrao@gmail.com" },
    "to":[{ "name":"Nellutla L N Rao", "email":"nellutlalnrao@gmail.com" }],
    "cc":[{ "name":"Nellutla L N Rao", "email":"nellutlalnrao@gmail.com" }],
    "bcc":[{ "name":"Nellutla L N Rao", "email":"nellutlalnrao@gmail.com" }]
}';
*/    
print_r($dataString);
$data = json_decode($dataString);
try {
      $mail = new PHPMailer(true);
  
      // Set from address
      $mail->setFrom($data->{'from'}->{'email'}, $data->{'from'}->{'name'});
  
      // Set recipients
      foreach ($data->{'to'} as $recipient) {
        $mail->addAddress($recipient->{'email'}, $recipient->{'name'});
      }
      if (isset($data->{'cc'})) {
       foreach ($data->{'cc'} as $recipient) {
        $mail->addCC($recipient->{'email'}, $recipient->{'name'});
       }
      }
      if (isset($data->{'bcc'})) {
       foreach ($data->{'bcc'} as $recipient) {
        $mail->addBCC($recipient->{'email'}, $recipient->{'name'});
       }
      }
  
      $mail->isHTML(true);
      $mail->Subject =  $subject;
      $mail->Body = $body;
  
      $mail->send();
      echo 'Email sent successfully';
    } catch (Exception $e) {
      print_r($e);
    }
  }



?>