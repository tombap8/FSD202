<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Get방식을 이용한 가위바위보 게임!</title>
    <script>
        window.addEventListener("load",function(){
            // 버튼 클릭시 결과페이지호출과 값보내기
            document.querySelector('.btn')
            .onclick = function(){
                
                location.href = 'get2.php?res='+
                document.querySelector('#sel').value+
                "&nm=결과";
                
                
            };////// onclick ///////////////
            
            
            
            
        });///// load ////////////////////////////
    </script>
</head>
<body>
   <h1>Get방식을 이용한 가위바위보 게임!</h1>
   <select name="sel" id="sel">
       <option value="1">가위</option>
       <option value="2">바위</option>
       <option value="3">보</option>
   </select>
   <button class="btn">가위바위보내기</button>
    
</body>
</html>