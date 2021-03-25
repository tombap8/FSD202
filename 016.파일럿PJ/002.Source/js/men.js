//// 디스커버리 남자 페이지 JS - men.js ////

// 전체 윈도우 높이값(페이지이동시 사용!)
let winH = $(window).height();

// 모바일여부 코드(1-모바일,0-일반,2-태블릿/모바일가로)
let mob = 0;
let winW = $(window).width(); //윈도우가로크기
if (winW <= 1024) mob = 2;
if (winW <= 500) mob = 1;
console.log("모바일:" + mob);
/////////////////////////////////////

$(function () { /// jQB //////////////////

    /// 부드러운 스크롤 호출!(제이쿼리 아님!)
    startSS();

    /// 스크롤 리빌 플러그인 호출!
    $.fn.scrollReveal();

    /// 스와이퍼 플러그인 호출!
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, //한 페이지당 슬라이드수
        spaceBetween: 0, // 슬라이드 사이 간격
        loop: true, // 무한루프 설정
        speed: 1200,// 슬라이드속도
        pagination: { // 하단 블릿설정
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { // 양쪽이동버튼 설정
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    }); ////////// swiper //////////////////


    ////// 햄버거 버튼 클릭시 전체메뉴 보이기/숨기기 /////
    // 대상: #ham
    $("#ham").click(function () {

        // 1. 햄버거 버튼에 class="on" 넣기/빼기
        $(this).toggleClass("on");

        // 2. 전체메뉴박스 서서히 보이기/숨기기
        $(".mbox").fadeToggle(400);

        // 3. 동영상 재생/멈춤(get(0) 또는 [0]으로 선택)

        // 모바일이 아닐때만 실행
        if (!mob) {

            // 동영상 재상/멈춤을 위한 햄버거 버튼 class="on"여부
            let isHAM = $(this).is(".on");
            console.log("햄버거?" + isHAM);

            if (isHAM) $(".bgm")[0].play();
            else $(".bgm")[0].pause();

        } ///////// if /////////////////


    }); //////// click /////////////////




    ///////////////////////////////////////////
    /// GNB a요소 클릭시 스크롤 애니메이션 하기 ////
    // a요소에 href="#아이디명" 하면 바로이동은 가능
    // 그러나 스크롤 애니메이션은 되지 않는다!!!
    // 제이쿼리에서 이것을 해주자!
    // 클릭 이벤트 대상: .gnb a 동시에 .bnav a
    ///////////////////////////////////////////
    $("#gnb a,.bnav a").click(function (e) {

        e.preventDefault(); //a이동막기!

        // 1.클릭된 순번 알아내기(클릭된 a의 부모 li순번)
        // 알아낸 순번을 전역 페이지번호(pno)에 넣기!
        pno = $(this).parent().index();

        // 만약 #gnb a이면 1을 더함(배너메뉴가 없으므로!)
        let isGNB = $(this).parent().parent().is("ul#gnb");
        // parent()를 두번쓴것은 li위에 ul인지 ol인지로 올라가서
        // is() 메서드로 이것이 ul#gnb 인것을 확인한다!
        // 이것이 맞으면 true가 리턴된다!
        //console.log("부모가#gnb인가?"+isGNB);

        if (isGNB) pno++; //1을 더함!

        //console.log("클릭순번:" + pno);


        // 2.기존 위치값 읽어오기 변경!!!!
        // 전체윈도우 높이값(winH)에 페이지번호를 곱한다!
        let pgpos = winH * pno;

        // 3. 스크롤 애니메이션으로 페이지이동하기
        // scrollTop 속성은 세로 스크롤위치값(제이쿼리용!)
        // 스크롤 이동대상: html,body 
        // (범용선택요소: 즉, 여러브라우저에서 공통사용됨!)
        $("html,body").stop().animate({
            scrollTop: pgpos + "px"
        }, 1200, "easeInOutQuint");
        ///// animate /////
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
        if (pno === 0) { //첫번째 메뉴 이므로 모든 class="on"지우기
            $("#gnb li").removeClass("on");
        } ///// if /////////////////////////
        else { //해당순번보다 1작게 해야 3개의 gnb중에서 매칭됨!
            $("#gnb li").eq(pno - 1).addClass("on")
                .siblings().removeClass("on");
        } ////// else ////////////////////////

        // 블릿네비게이션 클래스 넣기
        $(".bnav li").eq(pno).addClass("on")
            .siblings().removeClass("on");

    }); ///////// click ///////////////////





}); ////////// jQB //////////////////////
