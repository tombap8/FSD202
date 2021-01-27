// 서울랜드 메인페이지 JS - main.js //

$(function () { /// jQB ///////////////////////////
    
    /////// 메인 페이지 오늘 날짜넣기 /////////
    let today = new Date();
    let month = today.getMonth()+1;//월순번+1=월숫자
    let date = today.getDate();//날짜
    let day = today.getDay();//요일순번
    let week = ["일","월","화","수","목","금","토"];
    // 요일변경하기
    day = week[day];
    
    console.log("날짜:"+month+"/"+date+"/"+day);
    
    
    

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
        // 이동함수호출
        goSlide(0);
        // a요소 클릭시 이동속성 없애기!
        return false;
    }; /////// click함수 ///////////

    // (2)오른쪽버튼 ///////////////
    abtn[1].onclick = function () {
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



} ////// goSlide 함수 /////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
