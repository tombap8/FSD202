<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>드라마 데이터 입력하기</title>
    <style>
        body{
            text-align: center;
        }
        
        label{
            display: block;
            margin-top: 15px;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(function(){ /// jQB //////////////////
        $("#sbtn").click(function(e){
            e.preventDefault();
            
            // 각 항목이 비었는지 검사하기
            let res=true;//검사결과
            
            $("input[type=text]").each(
                function(idx,ele){
                //console.log("순번:"+idx);
                    
                // 각 입력양식 값이 빈값여부체크
                if($(ele).val().trim()==="") 
                    res = false;
                                        
            });////// each /////////
            
            console.log("검사결과:"+res);
            
        });////// click //////////////
        
        
    });////////// jQB //////////////////////
    </script>
</head>
<body>
   <h1>드라마 데이터 입력하기</h1>
   
   <form action="process/ins.php" method="post">
       
       <label for="dname">드라마명</label>
       <input type="text" name="dname" id="dname">
       <label for="actors">주연</label>
       <input type="text" name="actors" id="actors">
       <label for="broad">제작사</label>
       <input type="text" name="broad" id="broad">
       <label for="gubun">구분</label>
       <input type="text" name="gubun" id="gubun">
       <label for="stime">방영시간</label>
       <input type="text" name="stime" id="stime">
       <label for="total">방영횟수</label>
       <input type="text" name="total" id="total">
       
       <br><br>
       <input type="submit" value="전송버튼" id="sbtn">
       <!--
           form요소 내부의 submit버튼을 클릭하면
           form요소에 셋팅된 action속성의 페이지로
           전송된다!
       -->
   </form>
   
   
   
   
   
   
    
</body>
</html>