<?php
########## 회원가입 입력처리 페이지 ############
# member.php 페이지에서 POST방식으로 넘어온 데이터 받기

// 1.아이디
$mid = $_POST["mid"];
// 2.비번
$mpw = $_POST["mpw"];
// 3.이름
$mnm = $_POST["mnm"];
// 4.성별
$gen = $_POST["gen"];
// 5-1.이메일 앞주소
$email1 = $_POST["email1"];
// 5-2.이메일 뒷주소
$seleml = $_POST["seleml"];
// 5-3.직접입력 이메일 뒷주소
$email2 = $_POST["email2"];

//echo "1.아이디 : $mid<br>";
//echo "2.비번 : $mpw<br>";
//echo "3.이름 : $mnm<br>";
echo "4.성별 : $gen<br>";
//echo "5-1.이멜앞 : $email1<br>";
//echo "5-2.이멜뒷 : $seleml<br>";
//echo "5-3.직접입력 : $email2<br>";

/// 이메일 뒷주소 정하기 ///
$emailback;// 최종결정 이메일 뒷주소
$seleml === "free" ? 
    $emailback = $email2 : $emailback = $seleml;
// JS와 동일한 형식의 삼항연산자(조건연산자)
// 비?집:놀이동산;
// 해석: 선택박스값이 "free"이면 이메일 직접입력값 넣고
//      아니면 이메일 선택값을 넣어준다!

echo $email1."@".$emailback;






?>