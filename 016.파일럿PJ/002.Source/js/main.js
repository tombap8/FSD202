//// 디스커버리 메인 JS - main.js ////

$(function () { /// jQB //////////////////

    // 슬라이드 //////////
    let sld = $(".slide");

    // 드래그 설정 /////////
    sld.draggable({
        axis: "x" //x축고정
    });
    /////////////////////////////////////////////////
    // 배너 슬라이드 기능 구현 /////////////////////////
    // 대상: .slide
    // 기능: 슬라이드를 드래그 하여 슬라이드를 넘긴다
    // 이벤트: 드래그가 끝난시점에 대한 이벤트처리
    //  1) dragstop - 드래그가 멈췄을때
    //  2) touchend - 터치 스크린에서 터치가 끝났을때
    /// [ 드래그 기능 구현하기 ] /////
    // 1. 드래그가 끝난시점에 각 배너의 width값 10%를 기준해서
    //      left값이 -100% 이므로
    // 2. -110% 보다 작으면 슬라이드를 왼쪽으로 애니메이션 이동
    // 3. -90% 보다 크면 슬라이드를 오른쪽으로 애니메이션 이동
    // 4. -110% 와 -90% 범위 사이이면 원래위치인 -100%로 복귀
    // 유의사항) 실제 left값을 구하면 px단위 이므로
    //          기준값을 화면크기의 px로 변환하여 계산한다!

    ////// 이벤트 구현 /////////////////////////////
    // 대상: .slide (sld변수) //////////////////////
    // 사용메서드: on(이벤트명, 함수) ////////////////

    // 알아야할 값은??? 윈도우 크기(100%를 계산함), 
    //                  현재 슬라이드 left값

    // 윈도우 가로 사이즈(left값의 기본단위임!)
    let win = $(window).width();
    // 슬라이드 left값
    let sleft;

    sld.on("dragstop touchend", function () {

        //console.log("드래그끝!");

        // 1. 슬라이드 left이동 변경값 체크!
        sleft = $(this).offset().left;
        // offset().left 현재 선택요소의 left값을 리턴!
        console.log("left:" + sleft);

        // 2. left값이 -110% 보다 작으면 왼쪽으로 이동하기
        // -win*1.1 은 윈도우폭 만큼 나가있는 px크기의 110%확장
        if (sleft < -win * 1.1) {

            // 왼쪽이동 애니메이션 : -200%이동과 동일!
            $(this).stop().animate({
                left: -win * 2 + "px"
            }, 1500,"easeInOutCubic");


        } ///////// if //////////////////////////


    }); /////// dragstop, touchend 이벤트함수 ///////
    //////////////////////////////////////////////









}); ////////// jQB //////////////////////
