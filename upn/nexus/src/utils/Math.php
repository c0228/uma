<?php

function generateCode($length) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    
    for ($i = 0; $i < $length; $i++) {
        $randomIndex = random_int(0, $charactersLength - 1);
        $randomString .= $characters[$randomIndex];
    }
    
    return $randomString;
}

function generateNumber($length = 6) {
 $otp = "";
 for ($i = 0; $i < $length; $i++) {
  $otp .= rand(0, 9);
 }
 return $otp;
}
  