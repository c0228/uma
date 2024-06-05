<?php
class Masking {
 function encrypt($data, $secretKey) {
    $method = 'aes-256-cbc';
    $key = hash('sha256', $secretKey, true);
    $iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length($method));
    $encrypted = openssl_encrypt($data, $method, $key, 0, $iv);
    return base64_encode($iv . $encrypted);
 }

 function decrypt($encryptedData, $secretKey) {
    $method = 'aes-256-cbc';
    $key = hash('sha256', $secretKey, true);
    $data = base64_decode($encryptedData);
    $ivLength = openssl_cipher_iv_length($method);
    $iv = substr($data, 0, $ivLength);
    $encrypted = substr($data, $ivLength);
    return openssl_decrypt($encrypted, $method, $key, 0, $iv);
 }
}
$masking = new Masking();
?>