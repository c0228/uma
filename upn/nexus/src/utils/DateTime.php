<?php
$TIMESTAMP_TZ_FORMAT = "j F Y, h:i:s A T";
$TIMESTAMP_FORMAT = "j F Y, h:i A";
$DATE_FORMAT = "j F Y";
$TIME_FORMAT = "h:i A";
$TIME_TZ_FORMAT = "h:i A T";

function getCurrentDateTime($timeZone, $format){
 date_default_timezone_set($timeZone); // Set the time zone to IST (Indian Standard Time)
 return date($format);
};

function getExpiryTimestamp($ptFormat, $tzformat, $tz) { 
  $currentDateTime = new DateTime('now', new DateTimeZone($tz));
  $expiryDate = $currentDateTime->add(new DateInterval($ptFormat)); // PnYnMnDTnHnMnS
  return $expiryDate->format($tzformat);
}
?>

