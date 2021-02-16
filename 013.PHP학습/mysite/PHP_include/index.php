<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>PHP 인클루드 연습</title>
    <style>
        .box{
            position: relative;
            width: 1000px;
            min-height: 100px;
            margin: 0 auto;
            border: 1px solid #ccc;
        }
        .top img{
            height: 100px;
        }
        .gnb{
            position: absolute;
            right: 10px;
            bottom: 10px;
        }
        .cont{
            height: 400px;
            margin-top: 10px;
            background: url(images/gong.jpg) no-repeat 0/cover;
        }
    </style>
</head>

<body>
    <!--1.탑영역-->
    <header class="box top">
        <a href="index.php">
            <img src="images/daum.png" alt="다음로고"></a>
        <nav class="gnb">
            <a href="sub1.php">카페</a> |
            <a href="sub2.php">메일</a> |
            <a href="sub3.php">뉴스</a> |
            <a href="sub4.php">지도</a> |
            <a href="sub5.php">증권</a>
        </nav>
    </header>
    <!--2.본문영역-->
    <section class="box cont"></section>
    <!--3.하단영역-->
    <footer class="box info">
        <address>
            회사소개 · 비즈니스 · 검색등록 · 제휴문의 · 인재채용 <br>
            이용약관 · 운영정책 · 청소년보호정책 · 위치기반서비스이용약관 · 개인정보처리방침 · 웹접근성안내 · 고객센터 <br>
            Copyright © Kakao Corp. All rights reserved.
        </address>
    </footer>



</body>

</html>
