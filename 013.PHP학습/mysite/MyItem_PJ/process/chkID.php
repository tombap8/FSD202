<?php
########################################
########## 아이디 중복검사 ###############
########################################

// 아이디 받기 
$mid = $_POST["mid"];

//echo $mid;

// 조회 쿼리 만들기
$sql = "SELECT COUNT(*) FROM `member` WHERE `mid` = '$mid'";

//echo $sql;

##### DB연결 문자열 #######
include "dbcon.inc";

// 쿼리를 DB에 실행 ///
$res = $conn->query($sql);

// 검색결과가 있으면 실행결과 가져오기!
// num_rows는 결과 레코드 개수를 리턴함!
if($res->num_rows>0){// 검색결과가 있으면
    $row = $res->fetch_array();
    //실행결과를 가져옴
    // fetch_array() 메서드는 배열번호를 사용가능
    // 첫번째 결과값이 0번이다! $row[0]
} /////////// if ////////////////////

echo $row[0];







?>