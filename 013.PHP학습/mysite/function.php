<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>PHP의 함수와 변수의 범위</title>
</head>
<body>
   <?php
    /*    
    함수(function) - 실행코드 저장공간
        
    - 형식:
    
    function 함수명(전달변수){
        ...코드...
        return 값 또는 변수;
    }
    
    - 함수 키워드 function은 대소문자 구분이 없다!
        또한 함수명도 대소문자 구분이 없다! 왜? 모른다...
        -> 이것이 JS와 다른점!
        
    예) function === Function === funCtIon === ...
        
        (주의사항: 반면에 PHP의 변수는 대소문자를 철저히 구분한다!!!)
    */
    
    // 국적 변수
    $nation = ", 국적은 한국인";
    
    
    // 함수1
    Function askStar($nm){ // $nm - 이름을 받는 전달변수
        
        // 작품명 변수
        $work;
        
        if($nm === "공유"){
            $work = "도깨비";
        } ///// if /////////
        elseif($nm === "김수현"){
            $work = "해품달";
        } ///// elseif /////////
        else{
            $work = "누구셔?";
        } ///// else ////////////
        
        // 함수의 리턴
        return $work.$nation;
        
        
    } //// askStar함수 /////////////////
    
    // 함수2
    function askFirm($nm){// $nm - 이름을 받는 전달변수
        
        // 회사명변수
        $firm;
        
        if($nm === "공유"){
            $firm = "매니지먼트 숲";
        } /////// if //////////////
        elseif($nm === "김수현"){
            $firm = "키이스트";
        } ////// elseif //////////
        else{
            $firm = "누구셔?";
        } /////// else ////////////
        
        //함수의 리턴
        return $firm.$nation;
        
        
    } /////// askFirm함수 ///////////////
    
    
    
    //// 함수를 호출하여 화면에 찍어보기 ///////
    // 함수 호출시 함수명은 대소문자 구분안함!!!!!!!
    
    echo "<h1>공유의 대표작은? ".askSTAR("공유")."</h1>";
    echo "<h1>공유의 소속사는? ".askfirm("공유")."</h1>";
    
    
    
    
    
    
    ?>
    
</body>
</html>