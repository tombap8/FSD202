<?php
/// POST방식으로 넘어온 데이터를 php에서 받아서 처리한다!!!
// $_POST[폼요소의 name값] -> post방식으로 넘어온 값을 받는다!

$dname = $_POST["dname"];
$actors = $_POST["actors"];
$broad = $_POST["broad"];
$gubun = $_POST["gubun"];
$stime = $_POST["stime"];
$total = $_POST["total"];

echo "1.드라마명: $dname<br>2.주연: $actors<br>3.제작사: $broad<br>4.구분: $gubun<br>5.방영시간: $stime<br>6.방영횟수: $total";




?>