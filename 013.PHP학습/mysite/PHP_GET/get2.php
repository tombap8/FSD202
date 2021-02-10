<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Get방식을 이용한 가위바위보 게임! 결과페이지</title>
</head>
<body>
   <h1>게임의 결과는?</h1>
   <?php 
    /*
    [ Get방식으로 넘어온 데이터 php에서 받기 ]
    - 가져오는 방법:
        $_GET[키이름]
            
    - Get방식의 구성: url?키=값&키=값&키=값...
        여기서 이퀄앞의 문자가 키이름이다!
    */

    echo $_GET["res"];
    echo $_GET["nm"];
    
    
    
    
    ?>
    
</body>
</html>