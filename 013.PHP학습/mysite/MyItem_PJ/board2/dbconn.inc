<?php
///// DB연결 문자열 ////
$servername = "localhost";
$username = "root";/*최고관리자권한*/
$password = "";
$dbname = "mydb";

// Create connection
$dbconn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($dbconn->connect_error) {
    die("DB연결에 실패하였습니다! : " . $dbconn->connect_error);
} 


//// 한글깨짐 방지 /////////////////////////////////////////////
$dbconn->query("set session character_set_connection=utf8;");
$dbconn->query("set session character_set_results=utf8;");
$dbconn->query("set session character_set_client=utf8;");
///////////////////////////////////////////////////////////////

?>