/// 회원가입 페이지 JS - member.js /////

$(function () { /// jQB //////////////////
    /*
    [ 입력폼의 유효성 검사 ]
    - 검사원리 : 입력창에 클릭 또는 탭하여 입력 가능상태
    (커서가 깜박이는 상태)를 포커스 상태라고 함.
    이 포커스 상태에서 다른 부분이 클릭(탭)되면 포커스가
    풀리게 됨. 이 상태를 블러(blur)상태라고 함
    이렇게 이벤트가 블러로 발생할때 유효성 검사를 시행함
    - 이벤트 대상선정 : 입력요소 중 text, password
    input[type=text],input[type=password]
    - 제이쿼리 사용 메서드 : blur()
    */
    $("input[type=text],input[type=password]")
        .blur(function () {
        
        // 블러가 발생한 요소의 아이디값
        // current id 현재아이디
        let cid = $(this).attr("id");
        // attr(속성명) -> 선택요소의 속성값을 읽어옴
        // attr(속성명,속성값) -> 선택요소의 속성셋팅
        
        // 블러가 발생한 요소의 값
        // current value 현재값
        let cv;
        
        // 아이디나 비밀번호는 모든 공백제거(groSpace함수)
        // 이름은 앞뒤공백만 제거, 중간공백허용(trim함수)
        if(cid==="mnm") cv = $(this).val().trim();
        else cv = groSpace($(this).val());
        
        // val() -> 선택요소에 입력된 값을 읽어옴
        // val(값) -> 선택요소에 값셋팅
        // trim() -> 문자 앞뒤공백제거
        // groSpace(값) - 모든공백제거함수(우리가만든것!)
        
        // 공백제거 후 다시넣기
        $(this).val(cv);

        console.log("블러발생!"+cid+"/값:"+cv);
        
        /// 0. 빈값일 경우 "필수입력" 메시지 띄우기! /////
        if(cv === ""){
            $(this).siblings(".msg").text("필수입력");
            // siblings(요소이름) - 형제요소 중 특정요소
        } ///// if문 : 빈값일때 /////////////////////
        
        /// 1. 아이디일때 검사하기 //////////////////
        else if(cid === "mid"){
          //console.log("아이디검사:"+validReg(cv,cid));
            
            // 유효성 검사결과가 true이면 //////
            if(validReg(cv,cid)){
                $(this).siblings(".msg")
                .html('<b style="color:green">훌륭한 아이디네요~!</b>');
            } ///// if문 : 아이디검사결과 true /////
            // 아이디 유효성검사 불통과시 //////
            else{
                $(this).siblings(".msg")
                .text("아이디는 6~10자 영문자 또는 숫자");
            } ///// else문 : 아이디검사결과 false /////
                        
        } ///// else if문 : 아이디검사 /////////////
        
        /// 2. 비밀번호 검사하기 /////////////////////
        else if(cid === "mpw"){
            
            // 비번검사 결과가 false일때(!NOT 결과가 반대)
            if(!validReg(cv,cid)){
                $(this).siblings(".msg")
                .text("특수문자,문자,숫자 포함 형태의 5~15자리");
            } /// if문 : 비번검사 결과가 false일때 /////
            // 비번검사 결과가 true일때
            else{// 출력 메시지 지우기
                $(this).siblings(".msg").empty();
            } //// else문 : 비번검사결과 true //////
            
        } /////// else if문 : 비밀번호검사 //////////
        
        /// 3. 비밀번호 확인 검사하기 ////////////////
        else if(cid === "mpw2"){
            
            // 비밀번호 입력값과 불일치하면
            if(cv !== $("#mpw").val()){
                $(this).siblings(".msg")
                .text("비밀번호가 일치하지 않습니다!");
            } ///// if문 : 비밀번호와 확인 값 불일치 //
            else{
                $(this).siblings(".msg").empty();
            } ///// else문 : 비밀번호와 확인 일치 /////
            
            
        } ///// else if문 : 비밀번호 확인 검사 ///////
        
        /// 빈값이 아닐때 메시지 지우기 ///////////////
        else{
            $(this).siblings(".msg").empty();
            // empty() - 내용지우기
        } //////// else : 빈값이 아닐때 //////////////
        
        
        
        
        
        }); /////// blur ///////////////////////////
    ////////////////////////////////////////////////



}); ////////// jQB //////////////////////

/*//////////////////////////////////////////////
    함수명: groSpace (get rid of space)
    기능: 문자의 모든 공백을 제거하여 리턴함
*///////////////////////////////////////////////
function groSpace(val){ // val - 전달변수(처리할값)
    // 정규식 문법 - 슬래쉬 사이에 표현
    // \s - 스페이스를 의미, g - 전역플래그(모두찾음)
    // 역슬래쉬는 엔터키 위에 우리나라돈 원문자를 누름!
    // new value 새로운값
    let newval = val.replace(/\s/g,"");
    // 넘어온 문자값에서 스페이스를 모두 찾아 없애라!
    
    // 호출한 곳으로 값을 가지고 돌아가라!
    return newval;
    
} ////// groSpace 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

/*////////////////////////////////////////
    함수명:validReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말자!-싸면 문자가됨)
*/ ////////////////////////////////////////
function validReg(val, cid) {
    // val - 검사할 값, cid - 처리구분아이디
    console.log(val+"/"+cid);

    // 정규식 변수
    let reg;

    switch (cid) {
        case "mid": //아이디
            reg = /^[a-z0-9]{6,10}$/g;
            //아이디는 6~10자 영문자 또는 숫자
            break;
        case "mpw": //비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=\*]).*$/;
            //특수문자,문자,숫자 포함 형태의 5~15자리 이내의 암호 정규식
            // 특수문자중 \* (역슬래쉬별)은 특수문자처리임
            // *은 모든이라는 뜻으로사용되기때문!
            break;
        case "eml": //이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            break;

    } ///// switch case문 ///////

    console.log("정규식:"+reg);
    // 검사결과 리턴
    // test(값) 값을 검사하여 
    // true/false 리턴하는 JS내장함수
    return reg.test(val);

} ///////////// validReg 함수 //////////////
//////////////////////////////////////////
//////////////////////////////////////////









