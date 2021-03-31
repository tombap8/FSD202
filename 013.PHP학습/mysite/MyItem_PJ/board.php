<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 게시판 페이지</title>
    <link rel="stylesheet" href="css/temp.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
</head>

<body>
    <!--로그인세션처리 인클루드-->
    <?php include "inc/login_session.inc"; ?>
    
    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->        
        <?php include "inc/top.inc" ?>

        <!--2.컨텐츠영역-->
        <main id="cont">
            <div id="bbox">
                <iframe src="board/list.php"></iframe>
            </div>
        </main>
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
    </div>



</body></html>