// 서울랜드 메인페이지 JS - main.js //

$(function () { /// jQB ///////////////////////////

    /////// 메인 페이지 오늘 날짜넣기 /////////
    let today = new Date();
    let month = today.getMonth() + 1; //월순번+1=월숫자
    let date = today.getDate(); //날짜
    let day = today.getDay(); //요일순번
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    // 요일변경하기
    day = week[day];

    console.log("날짜:" + month + "/" + date + "/" + day);

    // 날짜 화면 출력: 월,일,요일순
    $(".month").text(month);
    $(".date").text(date);
    $(".day").text(day);




    //////////////////////////////////////////////////
    ///// 탭메뉴 클릭시 해당 컨텐츠 보이기 ////////////////
    /// click 이벤트 대상: .tabTit a
    /// 변경 대상: .tabTit li, .tabCont li
    /// 변경 내용: 변경대상에 class="on"넣기(다른것 지우기)
    ///////////////////////////////////////////////////
    $(".tabTit a").click(function (e) {
        // a요소 기본기능 막기
        e.preventDefault();

        // 1. 클릭된 요소의 순번 알아내기(li-a요소의 부모)
        // 왜 필요한가? 탭 컨텐츠때문에 같은 순서를 셋팅하기위해 필요!
        let idx = $(this).parent().index();
        // $(this) - a요소 이므로 부모(parent)로 올라간다!
        console.log("순번:" + idx);

        // 2. 탭메뉴는 클릭된 자신(this)의 부모(li)에게 class="on"
        //  다른 형제 요소들(li들)은 class="on"을 지운다!
        $(this).parent().addClass("on")
            .siblings().removeClass("on");

        // 3. 탭컨텐츠는 탭메뉴의 순번과 동일한 순번의 li에 class="on"
        // 다른 형제 요소들(li들)은 class="on"을 지운다!
        $(".tabCont li").eq(idx).addClass("on")
            .siblings().removeClass("on");


    }); ///////// click /////////////////


    ///// 배너 블릿버튼 클릭시 배너 이동하기 /////
    // 클릭이벤트 대상 : .indic a
    // 변경대상: .slider li
    $(".indic a").click(function (e) {

        e.preventDefault(); // 기본기능막기

        // 자동넘김지우기
        clearAuto();

        // 1. 클릭된 a요소의 부모li의 순번 구하기
        let idx = $(this).parent().index();
        console.log("클릭된블릿순번:" + idx);

        // 2. 블릿순번과 동일한 순번의 배너슬라이드에 클래스 "on"넣기
        $(".slider li").eq(idx).addClass("on")
            .siblings().removeClass("on");

        // 3. 블릿변경하기 ////
        $("img", this) //주인공!
            .attr("src", "images/ico_pm_55_on.png")
            .parents("li").siblings().find("img")
            .attr("src", "images/ico_pm_55_off.png");

        // 4. 블릿 순번을 전역변수 슬라이드 순번(bseq)과 일치시키기!
        bseq = idx; // 매우중요함!!!!!!


    }); ///////// click ///////////////////


    //// 할인 배너 이동하기 //////////
    // 클릭이벤트 대상: .upb , .dwb
    // 변경 대상: .halban ul
    let hban = $(".halban ul");
    // 광클금지변수
    let prot = 0; //0-허용,1-불허용
    ///////////////////////////////    
    // 위로 이동버튼 클릭시
    $(".dwb").click(function (e) {

        e.preventDefault(); //기본이동막기

        /// 광클금지 /////////////////////////
        if (prot) return false; //1이면 돌아가
        prot = 1; //1로만들어 잠금!
        setTimeout(function () {
            prot = 0;
        }, 400); //0.4초후에 해제!
        ////////////////////////////////////
        
        // 자동이동지우기
        clearAuto2();

        // 1. 대상이동하기: top값을 하나의 높이만큼이동함
        hban.animate({
                top: "-92px"
            }, 400, "easeOutCubic",
            function () { //애니후
                // 맨앞li 맨뒤로 보내기(동시에 top값 0)
                $(this).append(hban.find("li").first())
                    .css({
                        top: "0"
                    });

            }); /// animate /////


    }); ////// click ////////////////

    // 아래로 이동버튼 클릭시 ///
    $(".upb").click(function (e) {

        e.preventDefault(); //기본이동막기

        /// 광클금지 /////////////////////////
        if (prot) return false; //1이면 돌아가
        prot = 1; //1로만들어 잠금!
        setTimeout(function () {
            prot = 0;
        }, 400); //0.4초후에 해제!
        ////////////////////////////////////
        
        // 자동이동지우기
        clearAuto2();

        // 1. 먼저 맨뒤 li를 맨앞으로 이동과 동시에
        // top값을 -92px 즉, li하나가 위에 나가있는 위치로 변경!
        hban.prepend(hban.find("li").last())
            .css({
                top: "-92px"
            })
            // 2. top값을 0으로 애니메이션 하기
            .animate({
                top: "0"
            }, 400, "easeOutCubic"); //// animate ///


    }); ///////////// click //////////////

    //////////////////////////////////////////////
    /// 할인 배너 자동넘기기 셋팅하기 ////////////////
    ///////////////////////////////////////////////
    
    /// 문제가있다!? 전역변수구역에 이미 같은이름의 
    // autoSlide(), autoT, cleatAuto(), autoI 가 있다!
    // 기존방식은 단순히 이름을 바꿔줘야했다!
    // 제이쿼리 영역안에 있으므로 이 영역에서만 유효한 같은이름의
    // 변수로 선언할 수 있다!  그 방법은 var 대신 let을 쓰는 것이다!
    /////////////////////////////////////////////////////////
    
    
    // 인터발함수(지우기위해 만든변수)
    let autoI;
    /*////////////////////////////////////////////
        함수명: autoSlide
        기능: 자동넘기기 셋팅함수(인터발함수)
    */ ////////////////////////////////////////////
    let autoSlide = function () {
        autoI = setInterval(function () {
            
            // .dwb버튼 클릭시 이동과 동일함!
            hban.animate({
                top: "-92px"
            }, 400, "easeOutCubic",
            function () { //애니후
                // 맨앞li 맨뒤로 보내기(동시에 top값 0)
                $(this).append(hban.find("li").first())
                    .css({
                        top: "0"
                    });

            }); /// animate /////
            
        }, 2000);//할인배너는 시간 2초~!
        
    }; ////// autoSlide함수 //////////////////////
    //////////////////////////////////////////////

    // 할당형함수 아래에서 처음 호출해야함!
    autoSlide(); //최초호출!


    // 타임아웃변수(쓰나미방지용 지우기변수)
    let autoT;
    /*////////////////////////////////////////////
        함수명: clearAuto
        기능: 자동넘김 지우기함수(클리어인터발함수)
    */ ////////////////////////////////////////////
    // 메인배너의 clearAuto와 구별이 필요함! clearAuto2로 명명!
    let clearAuto2 = function () {

        // 자동넘김 할당된 변수를 지운다(autoI)
        clearInterval(autoI);
        // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다!
        clearTimeout(autoT);

        // 안건드리면 5초후 다시 자동호출하기!
        // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
        autoT = setTimeout(autoSlide, 5000);

    }; ////// clearAuto함수 /////////////////////////
    ///////////////////////////////////////////////






}); ///////////// jQB ///////////////////////////





// 코드분리방식에 따라 이벤트역시 JS파일에서 설정하는 것이
// 일반적인 방식이다!
// html 요소를 선택해야 하므로 로드구역이 필요하다!

//// 로드구역 /////////////////////////////////
window.addEventListener("DOMContentLoaded", function () {

    // 1. 로드구역 확인
    console.log("로딩완료");

    // 2. 이벤트 대상선정: .abtn
    var abtn = document.querySelectorAll('.abtn');


    // 3. 이벤트 종류: click

    // (1)왼쪽버튼 /////////////////
    abtn[0].onclick = function () {

        // 자동넘김지우기
        clearAuto();

        // 이동함수호출
        goSlide(0);

        // a요소 클릭시 이동속성 없애기!
        return false;

    }; /////// click함수 ///////////

    // (2)오른쪽버튼 ///////////////
    abtn[1].onclick = function () {

        // 자동넘김지우기
        clearAuto();

        // 이동함수호출
        goSlide(1);

        // a요소 클릭시 이동속성 없애기!
        return false;

    }; /////// click함수 ///////////


}); ///////// 로드구역 //////////////////////////////////
///////////////////////////////////////////////////////



/*//////////////////////////////////////////////
    함수명: goSlide
    기능정의: 이동버튼을 클릭하면 배너li를 변경한다.
            (상세)
            오른쪽버튼 클릭시 배너는 다음순번으로 변경
            왼쪽버튼 클릭시 배너는 이전순번으로 변경됨
            
            1. 이벤트 종류: click
            2. 이벤트 대상: .abtn (양쪽이동버튼)
            3. 변경대상: .slider li
            4. 변경내용: 변경대상의 특정순번li에 
                    class="on" 주기
                    이때, 미리셋팅된 class에 의해서
                    opacity가 0인 투명 li가 
                    opacity 1로 보이게 되고
                    트랜지션으로 인해 애니메이션된다.
            5. 시나리오:
                (1) 이동버튼을 클릭한다
                (2) 클릭시 이동함수를 호출한다
                (3) 호출시 이동함수에 버튼 구분값을 전달한다
                (4) 호출된 함수에서 버튼 구분값을 받는다
                    : 전달변수 gubun 사용하여 
                    왼쪽버튼은 0, 오른쪽버튼은 1을 받는다
                (5) 전역변수에 현재 슬라이드 li순번을 기록하고
                    이것을 업데이트하여 변경된 순번의 요소에
                    class를 "on"값으로 넣어준다.
                    동시에 다른 li들에는 class "on"을 제거한다.
                    : 전역변수 bseq 에 0을 할당함
                    (처음li순번은 0번이니까!)
                    오른쪽버튼 클릭시 1씩 증가 : bseq++
                    왼쪽버튼 클릭시 1씩 감소 : bseq--
                    
*/ //////////////////////////////////////////////

// 배너순번 전역변수
var bseq = 0;

function goSlide(gubun) { //gubun(왼쪽:0,오른쪽:1)

    // 1.함수호출, 전달값 확인
    console.log("슬라이드이동!" + gubun);

    // 2.변경대상: .slider li
    var tg = document.querySelectorAll('.slider li');
    console.log("슬라이드개수:" + tg.length);

    // 3.버튼 구분하여 배너순번 증감하기
    // 오른쪽버튼(gubun이 1이면 true)
    if (gubun) {

        //확인
        console.log("오른쪽!!!");
        // 배너순번 증가
        bseq++;
        // 한계수 설정(마지막 컬렉선번호 다음번호이면 처음으로)
        if (bseq === tg.length) bseq = 0;

    } ////// if //////
    /// 왼쪽버튼 //////////////
    else {

        //확인
        console.log("왼쪽!!!");
        // 배너순번 감소
        bseq--;
        // 한계수 설정(0보다작은 -1일경우 끝번호로)
        if (bseq === -1) bseq = tg.length - 1;
        // 마지막 컬렉션 번호는 개수보다 1작다!
    } ///// else //////

    // 변경된 배너순번 확인!
    console.log("배너순번:" + bseq);


    // 4. 해당순번에 class="on" 넣기

    // 클래스 전부 지우기 ////////
    for (var x of tg) {
        x.classList.remove("on");
    } ////// for of문 /////////

    // 선정된 변경대상 tg에 class를 넣어준다!
    // tg[bseq] 는 해당순번의 li요소
    tg[bseq].classList.add("on");

    /*
    [ 선택요소에 class 제어하기 ]
    
    classList 를 사용하여 원하는 class를 제어한다!
        
    1) add(클래스명) : 클래스 넣기
    2) remove(클래스명) : 클래스 제거하기
    3) toggle(클래스명) : 지정된 클래스가 없으면 넣고
                        있으면 제거함(토글기능)

    - 토글 기능이란? 전등불켜기 버튼 처럼 켰다/껏다
    하는 단순 전환 기능을 한가지 버튼할때 토글버튼이라고
    흔히 부른다!
    */

    ////// 블릿 버튼 순번에 맞게 변경하기 /////
    // 변경대상: .indic img
    // 변경순번: 이미 bseq변수에 순번이 들어와 있다!!!
    $(".indic img").eq(bseq)
        .attr("src", "images/ico_pm_55_on.png")
        .parents("li").siblings().find("img")
        .attr("src", "images/ico_pm_55_off.png");



} ////// goSlide 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////




// 인터발함수(지우기위해 만든변수)
var autoI;
/*////////////////////////////////////////////
    함수명: autoSlide
    기능: 자동넘기기 셋팅함수(인터발함수)
*/ ////////////////////////////////////////////
var autoSlide = function () {
    autoI = setInterval(function () {
        goSlide(1); //오른쪽방향 넘기기
    }, 3000);
}; ////// autoSlide함수 //////////////////////
//////////////////////////////////////////////

// 할당형함수 아래에서 처음 호출해야함!
autoSlide(); //최초호출!


// 타임아웃변수(쓰나미방지용 지우기변수)
var autoT;
/*////////////////////////////////////////////
    함수명: clearAuto
    기능: 자동넘김 지우기함수(클리어인터발함수)
*/ ////////////////////////////////////////////
var clearAuto = function () {

    // 자동넘김 할당된 변수를 지운다(autoI)
    clearInterval(autoI);
    // 타임아웃 실행쓰나미 방지용 타임아웃 지우기를 꼭한다!
    clearTimeout(autoT);

    // 안건드리면 5초후 다시 자동호출하기!
    // 매번 호출될때 위에서 지우므로 단 하나만 남아있음!
    autoT = setTimeout(autoSlide, 5000);

}; ////// clearAuto함수 /////////////////////////
///////////////////////////////////////////////
