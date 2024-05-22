<?php 
// define('PROJECT_ROOT', );


/* Logger Declaration in JSON */ 
include('./../../vendor/apache/log4php/src/main/php/Logger.php'); 
Logger::configure('./../../config/log-config.xml'); 
	
/* Property Files */
$propertyFile = './../../config/app-properties.ini';
$APP_PROPERTIES = parse_ini_file($propertyFile);

/* App Configuration Variables */
$PROJ_MODE = $APP_PROPERTIES["PROJ_MODE"];
$PROJ_APP_NAME = $APP_PROPERTIES["PROJ_APP_NAME"];
$PROJ_APP_LOGO = $APP_PROPERTIES["PROJ_APP_LOGO"];
$PROJ_APP_TZ = $APP_PROPERTIES["PROJ_APP_TZ"];

/* Email Configuration */
$PROJ_APP_EMAIL = $APP_PROPERTIES["PROJ_APP_EMAIL"];
$EMAIL_SUBJ_FORGOTPWD = $APP_PROPERTIES["EMAIL_SUBJ_FORGOTPWD"];
$EMAIL_EXPIRY_TIME = $APP_PROPERTIES["EMAIL_EXPIRY_TIME"];

/* Database Credentials */
$DB_SERVERNAME = $APP_PROPERTIES[$PROJ_MODE."_DB_SERVERNAME"];
$DB_NAME = $APP_PROPERTIES[$PROJ_MODE."_DB_NAME"];
$DB_USER = $APP_PROPERTIES[$PROJ_MODE."_DB_USER"];
$DB_PASSWORD = $APP_PROPERTIES[$PROJ_MODE."_DB_PASSWORD"];
$PROJ_URL = $APP_PROPERTIES[$PROJ_MODE."_PROJ_URL"];

ini_set('max_execution_time',300);
date_default_timezone_set($PROJ_APP_TZ);

$database = new Database($DB_SERVERNAME,$DB_NAME,$DB_USER,$DB_PASSWORD);