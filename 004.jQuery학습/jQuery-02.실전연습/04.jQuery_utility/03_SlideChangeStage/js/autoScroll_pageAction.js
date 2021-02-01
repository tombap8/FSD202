///////////////////////////////////////////////
////// 원 페이지 자동 스크롤 JS - 페이지액션 ///////
///////////////////////////////////////////////

////// 전역변수 구역 /////////////////
// 현재 페이지 번호
let pno = 0;
// 전체 페이지수(상수로 변경불가!)
const totnum = 7;
// 광스크롤 막기(0-허용,1-불허용)
let psts = 0;
// 초기화 함수
let init;
// 페이지액션 함수
let pageAction;
/////////////////////////////////////

$(function () { ///// jQB /////////////////

    ///////////////////////////////////////
    // 함수명: init(전역변수 구역에 선언!)
    // 기능: 각 페이지액션 대상 요소 초기화
    init = function () {

        // 1. 아수라 : 오른쪽 바깥으로 나가있음!
        $("#pg1 .minfo").css({
            left: "150%"
        }); //////// css ////////

        // 2. 고산자 : 처음에 안보임!(fadeIn사용예정!)
        $("#pg2 .minfo").hide(); //display:none 만들기!
        
        // 3. 인천상륙작전 : 위쪽으로 올라가 있음(내려올 예정)
        $("#pg3 .minfo").css({
            top: "-50%"
        });///// css /////////
        
        // 4. 봉이김선달 : 중앙에서 스케일을 0으로 함
        //              (원래크기로 변경예정)
        // 주의사항: transform은 animate로 할 수 없다!
        // 이 경우에는 transition으로 애니메이션 적용한다!
        // 유의사항: 이미 transform으로 translate(-50%,-50%)
        //          가 적용되었으므로 scale(0)에 같이 써줘야함!
        $("#pg4 .minfo").css({
            transform: "translate(-50%,-50%) scale(0)"
        });///// css ////////////
        
        // 5. 비밀은 없다 : y축으로 180도 뒤집어 놓고 투명하게설정
        // (원래 각도로 뒤집으며 투명도 1로 보이게 애니메이션 예정)
        $("#pg5 .minfo").css({
            transform: "translate(-50%,-50%) rotateY(180deg)",
            opacity: 0
        }); ////// css ////////////////////
        
        // 6. 아가씨 : 중앙에서 스케일 0 , 평면회전시켜놓는다!
        // (원래크기와 각도로 복귀 애니메이션 예정)
        $("#pg6 .minfo").css({
            transform:"translate(-50%,-50%) scale(0) rotate(1000deg)"
        });//////// css ////////////////
        
        // 7. 탐정홍길동 : x축 스케일 늘려놓는다.투명도0
        // (원래크기와 투명도로 복귀예정)
        $("#pg7 .minfo").css({
            transform:"translate(-50%,-50%) scaleX(10)",
            opacity: 0
        });///////// css ////////////////
        
        


    }; /////// init함수 ////////////////////

    // init함수 최초호출!(함수 아래쪽에서 호출해야함!)
    init();

    ///////////////////////////////////////
    // 함수명: pageAction(전역변수 구역에 선언!)
    // 기능: 각 페이지 도착시 요소 등장액션수행
    pageAction = function () {

        // 각 페이지번호에 맞게 액션을 수행한다!

        // 1. 아수라
        if (pno === 0) {

            // 오른쪽에서 중앙으로 날아오기(거미줄에 걸리는 것처럼!)
            $("#pg1 .minfo")
                .delay(1000)
                .animate({
                    left: "50%"
                }, 1000, "easeOutElastic"); //////// css ////////

        } ///// if ////////////////////
        // 2. 고산자
        else if (pno === 1) {

            // 페이드인 효과로 나타나기
            $("#pg2 .minfo").fadeIn(800);

        } //// else if ////////////////
        // 3. 인천상륙작전
        else if(pno === 2){
            // 위에서 아래로 내려오기 (지나갔다가 원래위치로!)
            $("#pg3 .minfo").animate({
                top: "50%"
            }, 500, "easeOutBack")
            
        } //// else if ///////////////
        // 4. 봉이 김선달
        else if(pno===3){
            // 중앙에서 스케일이 원래 크기로 애니메이션됨
            $("#pg4 .minfo").css({
                transform: "translate(-50%,-50%) scale(1)",
                transition: "all 2s ease-out"
            });///// css ////////////
            // transform 애니메이션은 transition으로!!!!
            
            
        }///// else if ////////////////
        //5. 비밀은 없다
        else if(pno === 4){
            // y축으로 원래각도인 0으로 돌아오고, 투명도 1로 복귀애니
            $("#pg5 .minfo").css({
                transform: "translate(-50%,-50%) rotateY(0deg)",
                opacity: 1,
                transition: "all 1s ease-out"
            }); ////// css ////////////////////
        }/////// else if //////////////////
        // 6. 아가씨
        else if(pno===5){
            
            // 중앙에서 원형회전하며 스케일 원래크기로 복귀!
            $("#pg6 .minfo").css({
                transform:"translate(-50%,-50%) scale(1) rotate(0deg)",
                transition: "all 1s cubic-bezier(0.76, 0.16, 0.15, 1.03)"
            });//////// css ////////////////
            
        }////// else if ///////////////////
        // 7. 탐정홍길동
        else if(pno===6){
            // x축 스케일 복귀 및 투명도 1
            $("#pg7 .minfo").css({
                transform:"translate(-50%,-50%) scaleX(1)",
                opacity: 1,
                transition:"all 2s cubic-bezier(0.38, -0.04, 0.84, 0.38)"
            });///////// css ////////////////
        }/////// else if /////////////////
        
        

    }; /////// pageAction함수 //////////////

    // pageAction함수 최초호출!
    pageAction();







    /*
    [ 자동스크롤 구현! ]
    
    1. 기능: 마우스휠을 위나 아래로 작동 시킬때
        페이지가 위나 아래로 자동으로 애니메이션 되는 기능
    
    2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
        - mousewheel (오리지널 이벤트)
        - wheel (신규이벤트-벤더사의 웹표준이 아직아님!)
        - DOMMouseScroll (파이어폭스 전용 휠이벤트)
        -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
        mousewheel + DOMMouseScroll 을 같이 사용할 것임!
        
    3. 마우스 휠 이벤트와 함수를 연결하는 방법:
        - on(이벤트명,함수)
        -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        (참고로 bind(이벤트명,함수) 제이쿼리 버전 3부터 지원중단!)
        
    4. 마우스 휠 이벤트 대상: 보통 document에 적용함
    
        -> 유의 사항: document, window, body 3가지 중요객체에서
        기본기능 중단을 못하도록 코드가 변경되었음(2019년경)
        이것을 대상으로 해서 e.preventDefault() 같은 코딩하면
        에러가 나면서 작동도 불가함!(만약 사용하려면 body내부에 
        body를 대신하는 요소를 따로 만들어서 사용해야한다!)
    */

    ///// 자동스크롤 구현 ////////////////
    // 이벤트를 띄어쓰기로 여러개 쓸 수 있음!
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        //e.preventDefault();<- 이걸 쓰면 에러가남!!!
        // document, body, window 객체는 막을 수 없다!
        // 여기서는 body에 overflow:hidden으로 대체함!(스크롤막기!)

        //console.log("스크롤중~!");

        // 광스크롤 막기 /////////////////////////////
        if (psts === 1) return true;
        // return false 하면 에러남! 왜? document니까!법이 바뀜!
        // return true 돌아가되 기능은 켜놓고 가(스크롤되게해!)
        // 우리는 이미 overflow:hidden 으로 스크롤막아서 상관없음!
        psts = 1; //잠금!
        setTimeout(function () {
            psts = 0;
        }, 1200); /// setTimeout ////
        ///////////////////////////////////////////

        // 1. 마우스휠 방향 알아내기
        e = window.event || e;
        // 이벤트 전달값이 window 오리지널 이벤트가 사용가능하면
        // 사용되도록 보완코드를 작성함!
        // 변수 = 경우1 || 경우2;
        // 변수에 경우1 과 경우2 중 true(유효한것)인것이 할당됨!
        /*
        wheelDelta 라는 값을 알아야 방향을 알 수 있다!
        wheelDelta란?
        - ie, chrome 브라우저 등 공용(opera는 detail을 사용함)
        - 마우스 이벤트에 따라 발생하는 이벤트 횟수 및 방향, 이동거리
        */
        let delta = e.detail ? e.detail : e.wheelDelta;
        // 변수에 유효한 설정이 적용되어 할당됨!

        //console.log("휠정보:" + delta);

        ///// 파이어폭스 일때 델타값 방향 반대로 하기!//////
        // JS 내장함수 test()를 이용하여
        // navigator.userAgent - 현재 브라우저 정보읽어옴!
        // "Firefox"라는 정보가 있으면 test() 에서 true값 리턴함!
        // 그래서 if문 안으로 들어가서 처리함(부호반대로!)

        //console.log("브라우저정보:"+navigator.userAgent);
        //console.log("정보여부:"+(/Firefox/i.test(navigator.userAgent)));

        // 정규식.test(가져올값) -> 정규식에 쓴 문자 있으면 true
        /*
            [ 간단한 정규식 표현기호 ]
            1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬를 사용함
            2. 모든 패턴 문자열을 찾을때 g라는 플래그문자를 사용함
            3. 대소문자 구분없이 찾을대 i라는 플래그문자를 사용함
            예) /,/g -> 모든 콤마를 찾아라!
            /Firefox/i 
            -> 모든"Firefox"라는 문자를 대소문자 관계없이 찾아라!
        */
        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -delta; //변수앞에 마이너스쓰면 부호가 반대됨!
        } ///////////// if /////////////////////////////////


        // 2. 마우스휠 방향에 따라 페이지 번호 증감!
        if (delta < 0) { // -120 아랫방향 스크롤(다음페이지)
            pno++;
            if (pno === totnum) pno = totnum - 1; //끝번호고정!
        } /////////// if ////////////////////////////////////
        else { // 120 윗방향 스크롤(이전페이지)
            pno--;
            if (pno < 0) pno = 0; //첫번호고정!
        } /////////// else //////////////////////////////////

        //console.log("페이지번호:"+pno);

        // 3. 이동할 페이지(.page)의 위치값 알아내기
        // -> 위치값은 클래스의 순번으로 알아냄-> pno 변수사용!
        let pgpos = $(".page").eq(pno).offset().top;
        // offset().top은 현재 선택요소의 top위치값을 숫자로 리턴함!

        //console.log("이동위치:"+pgpos);

        // 4. 실제 이동위치로 스크롤 애니메이션 이동하기
        $("html,body").stop().animate({
                scrollTop: pgpos + "px"
            }, 1200, "easeInOutQuint",
            function () { // 이동 후 페이지액션!
                pageAction();
            }); /// animate ///


        // 5. 메뉴변경하기 - 페이지 순번과 동일함!
        // GNB네비게이션 클래스 넣기
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");




    }); //////// mousewheel ///////////////////////////////
    //////////////////////////////////////////////////////





}); ///////// jQB ///////////////////////
