<?php 
/* Property Files */
$propertyFile ='./../../config/app-properties.ini';
$APP_PROPERTIES = parse_ini_file($propertyFile,true);

$PROJ_MODE = $APP_PROPERTIES["PROJ_MODE"];
$PROJ_NEXUS_URL = $APP_PROPERTIES[$PROJ_MODE."_PROJ_NEXUS_URL"];

$PROJ_APP_TZ = $APP_PROPERTIES["PROJ_APP_TZ"];

/* Database Credentials */
$DB_SERVERNAME = $APP_PROPERTIES[$PROJ_MODE."_DB_SERVERNAME"];
$DB_NAME = $APP_PROPERTIES[$PROJ_MODE."_DB_NAME"];
$DB_USER = $APP_PROPERTIES[$PROJ_MODE."_DB_USER"];
$DB_PASSWORD = $APP_PROPERTIES[$PROJ_MODE."_DB_PASSWORD"];


ini_set('max_execution_time',300);
date_default_timezone_set($PROJ_APP_TZ);

$database = new Database($DB_SERVERNAME,$DB_NAME,$DB_USER,$DB_PASSWORD);
?>