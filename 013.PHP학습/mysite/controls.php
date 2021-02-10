<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP 제어문 연습</title>
    <style>
        img{
            width: 50px;
        }
    </style>
    <script>
    //버튼을 클릭하면 입력된 숫자를 가지고 Get방식으로
    // 자기자신 페이지 다시 호출하기~!
        window.addEventListener("load",function(){
            
            document.querySelector('.btn')
            .onclick = function(){
                
                location.href = "controls.php?num="+
                document.querySelector('.txt').value;
                
            };////// onclick //////////////
            
            
        });/////////// load //////////////////////
    
    </script>
</head>
<body>
  <?php
    
    // 이미지 출력용변수
    $prt = "";
    
    //echo isset($_GET["num"]);
    
    // PHP에서 get방식 파라미터 변수가 셋팅됐는지 확인하는
    // 방법은?
    // isset(변수/함수리턴값)
    // 만약 셋팅이 된 경우엔 리턴값 1
    // 이것으로 if문을 사용하여 에러방지!!!
    
    if(isset($_GET["num"])){
        // 변수에 넘어온 숫자값 넣기
        $txt = $_GET["num"];
        echo $txt;
        
    } ///// if //////////////////
    
    
    
    
    
    ?>
  
   <h1>PHP 제어문 연습</h1>
   <h2>입력된 숫자를 이미지로 출력하기</h2>
   <input type="text" class="txt">
   <button class="btn">이미지로 변환하기</button>
   <br>
   <?=$prt?>
    
</body>
</html>