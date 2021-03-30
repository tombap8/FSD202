//// 디스커버리 남자 페이지 JS - men.js ////

// 전체 윈도우 높이값(페이지이동시 사용!)
let winH = $(window).height();

// 모바일여부 코드(1-모바일,0-일반,2-태블릿/모바일가로)
let mob = 0;
let winW = $(window).width(); //윈도우가로크기
if (winW <= 1024) mob = 2;
if (winW <= 500) mob = 1;
console.log("모바일:" + mob);

// 남성 신상품 정보
var sinsang = {
    "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
    "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
    "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
    "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
    "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
    "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
    "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
    "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
    "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};




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
        speed: 1200, // 슬라이드속도
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

    ///// 페럴랙스 플러그인 호출 ////////
    $(".plx").parallax("50%", 0.7);



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

    // 신상품 이동 인터발변수
    let newcall;

    // 신상품 박스 이동함수 호출 (인터발)
    newcall = setInterval(flowImg, 20);

    // 신상품 박스에 마우스 오버시 이동멈춤/ 아웃시 다시이동
    $(".flowImg li").hover(
        function () { // over

            // 1. 인터발지움
            clearInterval(newcall);

            // 2. 마우스 오버시에 li의 class값 읽어오기
            // class명과 같은 이름의 객체값에서 신상정보 가져옴!
            let ssi = $(this).attr("class");
            // this는 오버된 li자신!

            // 3.클래스 값으로 신상 객체의 값을 가져옴!
            ssi = sinsang[ssi];

            console.log("신상정보:" + ssi);

            // 4.신상정보 구분자(^)를 줄바꿈기호(<br>)로 바꾸기
            ssi = ssi.replace(/\^/g, "<br>");
            // replace(정규식바꿀값,바뀔값)
            // 정규식으로 쓰면 모두 바꿀 수 있다
            // 정규식 : /값/g (g는 모두찾는 flag-global의 뜻)
            // \^ 역슬래쉬를 쓴이유? 특수문자이므로!

            // 5.신상정보 박스 만들고 나타나기
            $(this).append('<div class="ibox"></div>');

            // 6.신상정보박스에 신상정보넣기
            $(".ibox").html(ssi)

                // 7.신상정보박스 애니메이션 등장하기
                .animate({
                    top: "105%",
                    opacity: 1
                }, 300, "easeOutCirc");

        },
        function () { // out

            // 1. 인터발 재실행
            newcall = setInterval(flowImg, 20);

            // 2.신상정보박스 하나만 남기기위해 지우기
            $(".ibox").remove();

        }); ///// hover ///////////////

    // 신상품 클릭시 상세페이지 이동하기 ///
    $(".flowImg a").click(function (e) {
        // 기본이동막기
        e.preventDefault();

        // 1. a요소 부모 li의 class명 읽어오기
        let cls = $(this).parent().attr("class");
        console.log("클래스명:" + cls);

        // 2. 남자상세페이지로 위의 값을 가지고 넘어간다
        location.href = "men_detail.html?gno="+cls;
        // GET방식으로 URL을 통해 전달값을 보낸다!


    }); ///////// click //////////////////

}); ////////// jQB //////////////////////

// 신상품 박스 이동값 변수
let fnum = 0; //left값

/*/////////////////////////////////////////////
    함수명: flowImg
    기능: 이미지를 왼쪽으로 계속 이동하여 흐르게함
*/ /////////////////////////////////////////////
function flowImg() {

    // 1. left값 1씩증가!
    fnum++;

    // 2. li하나당 크기가 되면 잘라서 뒤로 보내기
    // 대상: .flowImg
    let flowImg = $(".flowImg");
    // 조건: 상품하나당 크기(295px)를 넘으면 실행
    if (fnum > 295) {
        // 1. 맨앞li 맨뒤로 이동      
        flowImg
            .append(flowImg.find("li").first())
            // 2. left값 초기화!
            .css({
                left: "0"
            });
        // 3. fnum값 초기화!
        fnum = 0;

    } ///// if문 //////////////



    // 3. left값 대상에 적용하기
    flowImg.css({
        left: -fnum + "px"
    }); ////// css //////////////

} ////////// flowImg 함수 //////////////////////////
///////////////////////////////////////////////////