<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Get방식을 이용한 가위바위보 게임! 결과페이지</title>
    <style>
        img{
            width: 200px;
        }
    </style>
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

    //echo $_GET["res"];
    //echo $_GET["nm"];
    /*
    [ PHP에서 if문 ]
    - JS와 거의 유사하나 elseif 가 하나로 붙여서 써야한다!
        
        if(조건문){
            실행문
        }
        elseif(조건문){
            실행문
        }
        else{
            실행문
        }
    
    [조건문에서 사용되는 연산자]
        
    >(크다), <(작다), ==(같다),
    !=(같지않다),<>(같지않다), >=(크거나같다)
    <=(작거나같다)
    논리곱: && 또는 and
    논리합: || 또는 or
        (주의사항: and 나 or 는 에러발생확율이 있으니
        && 나 || 를 사용하기를 추천함!)
    논리부정: !
    */    
    
    # 넘어온 데이터에 매칭하여 가위바위보를 이미지로 보여준다!
    if($_GET["res"]==1)//가위
        echo '<img src="images/ga.png" alt="'.$_GET["nm"].'">';
    elseif($_GET["res"]==2)//바위
        echo '<img src="images/ba.png" alt="'.$_GET["nm"].'">';
    elseif($_GET["res"]==3)//보
        echo '<img src="images/bo.png" alt="'.$_GET["nm"].'">';
    
    
    
    
    
    
    
    ?>
    
</body>
</html>