<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>드라마 데이터 입력하기</title>
    <style>
        body{
            text-align: center;
        }
    </style>
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
       
   </form>
   
   
   
   
   
   
    
</body>
</html>