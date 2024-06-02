<?php
echo 'Hello World';

require 'vendor/autoload.php'; // Load Composer's autoloader

use Kreait\Firebase\Factory;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

// Initialize Firebase
$firebase = (new Factory)->withServiceAccount('./../../config/fcm-service-account.json');

// Get a reference to the Firebase Cloud Messaging service
$messaging = $firebase->createMessaging();

$deviceTokens = ['fJnZxa5WQCCa-OcsuEJFRr:APA91bGyHXlTiY5A0jgPWmoavMLt3ZHZZr2jse2xozBSqKrOAEm30WTUmVMdrtNDq510dN7prqAn0sYt1oe0H-x3TbPjVXJrKDmFDJCWLlSh6mJsacSyIS_vHBsHVe7D3qqBjYJLSf1Q'];
// Send the message With NotificationPush 
/*
try {
    $message = CloudMessage::withTarget('token', $deviceTokens[0])
    ->withNotification(Notification::create('Title TESTZONE', 'Body'))
    ->withData(['key1' => 'value']);
    
    $messaging->send($message);
    echo 'Notification sent successfully.';
} catch (Exception $e) {
    echo 'Error sending notification: ' . $e->getMessage();
}*/

// Send the Message to Multiple Devices
try {
$notification = Notification::create('MultiCast TESTZONE', 'Body')->withImageUrl('https://picsum.photos/200/400');
// Create the cloud message
$message = CloudMessage::new()
    ->withNotification($notification)
	->withAndroidConfig(['notification' => ['color' => '#ff0000', 'sound' => 'default']])
	->withData(['Multikey1' => 'value']);
$sendReport = $messaging->sendMulticast($message, $deviceTokens);
echo 'Notification sent successfully.';
} catch (Exception $e) {
    echo 'Error sending notification: ' . $e->getMessage();
}

// Send Message to a Topic
/*try {
$topic = 'news-updates';
$notification = Notification::create('Topic', 'Broadcasting');
$message = CloudMessage::withTarget('topic', $topic)
    ->withNotification($notification) // optional
    ->withData(['key1' => 'value']); // optional
$sendReport =  $messaging->send($message);
echo 'Notification sent successfully.';
} catch (Exception $e) {
    echo 'Error sending notification: ' . $e->getMessage();
} */

?>
