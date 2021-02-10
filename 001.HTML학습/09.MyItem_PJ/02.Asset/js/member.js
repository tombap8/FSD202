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
        let cv = $(this).val();
        // val() -> 선택요소에 입력된 값을 읽어옴
        // val(값) -> 선택요소에 값셋팅

        console.log("블러발생!"+cid+"/값:"+cv);
        
        
        }); /////// blur ////////////////////








}); ////////// jQB //////////////////////
