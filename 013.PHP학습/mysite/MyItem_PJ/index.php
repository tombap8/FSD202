<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
</head>

<body>
   <?php 
    # 세션 변수가 셋팅되었는지 검색하려면 먼저 세션을 시작해야함!!!
    session_start();
    
    
    # 세션변수가 셋팅된 경우에만 로그인 상태변경 실행
    # $_SESSION["mid"] 아이디 세션변수가 셋팅되었는가?
    # isset(변수) -> 변수값이 셋팅된 여부를 판별(셋팅시 1리턴)
    if(isset($_SESSION["mid"])){
        
        // 메시지
        $msg = $_SESSION["name"]."님, 환영합니다!";
        
        echo "<script>
                alert('".$msg."');
            </script>";
    } ////////// if문 ///////////////////////
    else{
        
        echo "<script>
                alert('변수가 셋팅되지 않았습니다!');
            </script>";
    } ///////// else문 ////////////
    
    
    ?>
    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->
        <?php include "inc/top.inc" ?>
        
        <!--2.컨텐츠영역-->
        <main id="cont">
           <h2 class="dn">메인페이지 아이템 소개</h2>
           <!--큰 메인이미지 박스-->
            <div class="mimg">
                <img src="images/iphone6.png" alt="아이폰6플러스">
            </div>
            <!--썸네일이미지박스-->
            <div class="thumbs">
                <ol>
                    <li>
                        <a href="">
                            <img src="images/small/iphone6.png" alt="아이폰6플러스">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/macbook.png" alt="맥북에어">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/shoes.png" alt="구두">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/watch.png" alt="시계">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="images/small/bag.png" alt="가방">
                        </a>
                    </li>
                </ol>
            </div>
            
        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
        
    </div>



</body></html>