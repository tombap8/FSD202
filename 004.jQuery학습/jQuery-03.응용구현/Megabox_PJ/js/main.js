/// 메가박스 메인 페이지 JS - main.js ///

$(function () { /// jQB ///////////////////////


    ///////////////////////////////////////////
    /// GNB a요소 클릭시 스크롤 애니메이션 하기 ////
    // a요소에 href="#아이디명" 하면 바로이동은 가능
    // 그러나 스크롤 애니메이션은 되지 않는다!!!
    // 제이쿼리에서 이것을 해주자!
    // 클릭 이벤트 대상: .gnb a 동시에 .bnav a
    ///////////////////////////////////////////
    $(".gnb a,.bnav a").click(function (e) {

        e.preventDefault(); //a이동막기!
        
        // 1.클릭된 순번 알아내기(클릭된 a의 부모 li순번)
        // 알아낸 순번을 전역 페이지번호(pno)에 넣기!
        pno = $(this).parent().index();
        console.log("클릭순번:" + pno);

        
        // 2.기존 위치값 읽어오기 변경!!!!
        // 전체윈도우 높이값(winH)에 페이지번호를 곱한다!
        let pgpos = winH * pno;

        // 3. 스크롤 애니메이션으로 페이지이동하기
        // scrollTop 속성은 세로 스크롤위치값(제이쿼리용!)
        // 스크롤 이동대상: html,body 
        // (범용선택요소: 즉, 여러브라우저에서 공통사용됨!)
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 1200, "easeInOutQuint"); ///// animate /////
        // stop()을 사용하여 여러개를 클릭했을때 마지막 선택
        // 만 남아서 처리되도록 중간에 쌓인 애니메이션 지움!

        // 4. GNB메뉴의 a요소 클릭했을때 클릭된
        // a요소의 li에 class를 "on"으로 넣으면
        // 이미 셋팅된 CSS의 디자인이 적용되어
        // 라임색 윗줄의 크기가 조금 커진 디자인이
        // 적용되어 마우스 오버시와 동일 디자인이 유지된다
        // 이것을 하는 이유는 현재 페이지가 무엇인지
        // 표시하기 위함이다!

        // 두개의 네비게이션을 동시에 변경하기
        
        // GNB네비게이션 클래스 넣기
        $(".gnb li").eq(pno).addClass("on")
            .siblings().removeClass("on");

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");

    }); ///////// click ///////////////////



}); ///////////// jQB ////////////////////////
