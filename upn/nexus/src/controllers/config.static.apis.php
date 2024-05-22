<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

if($_GET["action"]==='GetTimezones'){
    $timezone_identifiers = DateTimeZone::listIdentifiers();
    $timezones = array();
    
    foreach ($timezone_identifiers as $timezone_identifier) {
        $timezone = new DateTimeZone($timezone_identifier);
        $offset = $timezone->getOffset(new DateTime("now", $timezone));
        $offset_hours = floor(abs($offset) / 3600);
        $offset_minutes = abs($offset) % 3600 / 60;
        $offset_sign = $offset >= 0 ? '+' : '-';
    
        $value = $offset_sign . str_pad($offset_hours, 2, '0', STR_PAD_LEFT) . ':' . str_pad($offset_minutes, 2, '0', STR_PAD_LEFT);
        $timezones[] = array(
            'label' => $timezone_identifier.' (GMT '.$value.')',
            'value' => $timezone_identifier.' (GMT '.$value.')',
        );
    }
    
    echo json_encode($timezones, JSON_PRETTY_PRINT);
} else {
    echo 'No_Action_Found';
}


?>