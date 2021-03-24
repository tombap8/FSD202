//// 디스커버리 메인 JS - main.js ////

$(function () { /// jQB //////////////////

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
        }, 1200, "easeInOutQuint", pageAction);
        ///// animate /////
        // 맨 끝에 콜백함수로 페이지액션함수를 호출한다!
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
    // 배너커버
    let prot = $(".prot");
    // 배너순번(블릿순번)
    let bseq = 0;

    /// 만약 화면 크기가 중간에 변경될 경우 window크기 재할당!
    $(window).resize(function () {

        console.log("리사이즈!");
        
        // 사이즈가 변경되면 페이지 자체를 리로드함!
        location.reload();

        // 윈도우 크기 재설정!
        //win = $(window).width();
        
        // 모바일 코드 변경!
//        mob = 0;
//        if (win <= 1024) mob = 2;
//        if (win <= 500) mob = 1;
//        console.log("모바일:" + mob);

    }); ////// resize 메서드 /////////////////

    // 터치이벤트 연속발생방지
    let protTch = 0;
    
    //////////// 드래그 이벤트 함수 ////////////
    sld.on("dragstop touchend", function () {
        
        // 터치이벤트일때 연속 두번 발생방지
        if(protTch) return;
        protTch = 1;//잠금!
        setTimeout(function(){
            protTch = 0;//해제!
        },500);//// setTimeout //////

        console.log("드래그끝!");

        // 자동슬라이드 지우기!!!
        clearAuto();


        // 광드래그 막기용 커버작동!
        prot.show();

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
                }, 1500, "easeOutCubic",
                function () { // 애니후
                    // 이동후에 앞에 두개의 슬라이드가 있으므로
                    // 하나를 뒤로 이동시킨후 left값을 다시 -100%로 변경
                    // 처음과 똑같은 상태로 만들어준다!
                    $(this).append($("li", this).first())
                        .css({
                            left: -win + "px"
                        }); ////// css /////////

                    // 광드래그 커버제거!
                    prot.hide();

                    // 배너타이틀 등장함수 호출!
                    banTit();

                }); //////// animate /////////////

            // 배너블릿 순번증가
            bseq++;
            if (bseq === 6) bseq = 0; //한계수

        } ///////// if //////////////////////////

        // 3. left값이 -90%보다 크면 오른쪽으로 이동하기 ///
        else if (sleft > -win * 0.9) {

            // 오른쪽이동 애니메이션 : 0으로 이동!
            $(this).stop().animate({
                    left: "0px"
                }, 1500, "easeOutCubic",
                function () { /// 애니후 ////
                    // 이동 후 앞에 아무것도 없으므로
                    // 맨뒤li를 맨 앞으로 이동후 left값을 -100%변경
                    // 처음과 같은 상태로 만들어준다!!!
                    $(this).prepend($("li", this).last())
                        .css({
                            left: -win + "px"
                        }); /////// css /////////

                    // 광드래그 커버제거!
                    prot.hide();

                    // 배너타이틀 등장함수 호출!
                    banTit();

                }); /////// animate //////////

            //배너블릿 순번감소
            bseq--;
            if (bseq === -1) bseq = 5; //한계수

        } //////// else if //////////////////////

        /// 4. 범위에 들지 않은 경우(-110%~-90%) 제자리로 돌아가기
        else {

            $(this).stop().animate({
                    left: -win + "px"
                }, 400, "easeOutCubic",
                function () { // 애니후 ///

                    // 광드래그 커버제거!
                    prot.hide();

                }); ////////// animate /////////////

        } ///////////// else //////////////////

        /// 블릿 해당순번 li에 class "on"넣기 ///
        $(".indic li").eq(bseq).addClass("on")
            .siblings().removeClass("on");


    }); /////// dragstop, touchend 이벤트함수 ///////
    //////////////////////////////////////////////

    /*//////////////////////////////////////////////
        함수명: autoSlide
        기능: 슬라이드 자동넘기기
    */ //////////////////////////////////////////////
    let autoSlide = function () {

        // 슬라이드 왼쪽이동하기 (드래그이동 if문과 동일) //

        // 광드래그 막기용 커버작동!
        prot.show();

        // 왼쪽이동 애니메이션 : -200%이동과 동일!
        sld.stop().animate({
                left: -win * 2 + "px"
            }, 1500, "easeOutCubic",
            function () { // 애니후
                // 이동후에 앞에 두개의 슬라이드가 있으므로
                // 하나를 뒤로 이동시킨후 left값을 다시 -100%로 변경
                // 처음과 똑같은 상태로 만들어준다!
                $(this).append($("li", this).first())
                    .css({
                        left: -win + "px"
                    }); ////// css /////////

                // 광드래그 커버제거!
                prot.hide();

                // 배너타이틀 등장함수 호출!
                banTit();

            }); //////// animate /////////////

        // 배너블릿 순번증가
        bseq++;
        if (bseq === 6) bseq = 0; //한계수

        /// 블릿 해당순번 li에 class "on"넣기 ///
        $(".indic li").eq(bseq).addClass("on")
            .siblings().removeClass("on");

    }; //////// autoSlide 함수 ///////////////////////
    ////////////////////////////////////////////////

    /*//////////////////////////////////////////////
        함수명: goRight
        기능: 슬라이드 오른쪽이동하기
    */ //////////////////////////////////////////////
    let goRight = function () {

        // 슬라이드 오른쪽이동하기 //
        //(드래그이동 else if문과 동일) 

        // 광드래그 막기용 커버작동!
        prot.show();

        // 오른쪽이동 애니메이션 : 0px이동과 동일!
        sld.stop().animate({
                left: "0px"
            }, 1500, "easeOutCubic",
            function () { /// 애니후 ////
                // 이동 후 앞에 아무것도 없으므로
                // 맨뒤li를 맨 앞으로 이동후 left값을 -100%변경
                // 처음과 같은 상태로 만들어준다!!!
                $(this).prepend($("li", this).last())
                    .css({
                        left: -win + "px"
                    }); /////// css /////////

                // 광드래그 커버제거!
                prot.hide();

                // 배너타이틀 등장함수 호출!
                banTit();

            }); /////// animate //////////

        //배너블릿 순번감소
        bseq--;
        if (bseq === -1) bseq = 5; //한계수

        /// 블릿 해당순번 li에 class "on"넣기 ///
        $(".indic li").eq(bseq).addClass("on")
            .siblings().removeClass("on");

    }; //////// goRight 함수 ///////////////////////
    ////////////////////////////////////////////////


    let autoI; //인터발용변수
    /*//////////////////////////////////////////////
        함수명: autoCall
        기능: 메인 슬라이드 배너 넘기기 자동호출!
    */ //////////////////////////////////////////////
    let autoCall = function () {
        autoI = setInterval(autoSlide, 4000);
    }; ////////// autoCall 함수 //////////////////////
    ////////////////////////////////////////////////

    //// 슬라이드 자동넘김 최초호출!!! ///
    autoCall();


    // 타임아웃용변수
    let autoT;
    /*/////////////////////////////////////////////
        함수명: clearAuto
        기능: 메인 배너 슬라이드 자동호출 지우기 
            일정시간 후 자동넘김 재호출!
        어디서호출? : 직접 드래그시 호출!
    */ /////////////////////////////////////////////
    let clearAuto = function () {

        // 인터발 지우기
        clearInterval(autoI);
        // 타임아웃 지우기(실행 쓰나미방지!)
        clearTimeout(autoT);

        // 매번 재호출 셋팅!
        autoT = setTimeout(autoCall, 4000);
        // 4초후에 자동넘김함수 재호출!

    }; ///////// clearAuto 함수 /////////////////////
    ///////////////////////////////////////////////


    //// 배너 슬라이드 타이틀 글자 셋팅 /////
    let bantxt = [
        "Men's Season<br>Collection",
        "2021 Special<br>Collection",
        "GongYoo<br>Collection",
        "T-Shirt<br>Collection",
        "Shoes<br>Collection",
        "Wind Jacket<br>Collection"
    ]; ////// 배너 슬라이드 타이틀 /////////

    /*////////////////////////////////////////////////
        함수명: banTit
        기능: 각 배너 슬라이드에 도착 후 글자 등장 애니메이션
    */ ////////////////////////////////////////////////
    let banTit = function () {

        // 0. h2.btit요소를 먼저 지우고 시작함!
        $(".btit").remove();

        // 1.배너 도착 후 타이틀을 슬라이드에 h2태그로 넣기
        // 대상: .slide li
        // 실제배너는 맨앞에 하나가 있고 두번째 이므로 1번이다!
        sld.find("li").eq(1)
            .append('<h2 class="btit disableselect disabledrag"></h2>');
        // class명에 disableselect,disabledrag는
        // 드래그시 글자가 영역잡히는 것을 막기위한 css
        // 클랙스 적용이다!

        // 2-0.슬라이드 이미지에 따라 글자위치 조정하기
        // 2,3번 슬라이드만 오른쪽이고 나머지는 왼쪽임
        let tpos = "20%"; //왼쪽기준
        if (bseq === 1 || bseq === 2) tpos = "70%";

        // 모바일일경우 중앙으로 보내기
        if (mob) tpos = "50%";

        // 글자크기
        let fz = "4vw";
        if (mob) fz = "7vw";

        // 2.생성된 h2.btit 요소에 html로 글자넣기
        // 글자는 bantxt 배열변수에 이미셋팅함!
        // bseq는 배너 및 블릿 순번변수(0~5)
        $(".btit") //주인공!
            .html(bantxt[bseq])

            // 3. h2.btit 디자인하기
            .css({
                position: "absolute",
                // 부모는? 싸고있는 li
                top: "55%",
                // top값을 55%에서 50%로 올라오며 등장예정!
                left: tpos,
                // 오른쪽,왼쪽 변경값을 변수로 설정함!
                transform: "translate(-50%,-50%)",
                font: "bold " + fz + " Verdana",
                color: "#fff",
                textShadow: "1px 1px 3px #777",
                whiteSpace: "nowrap",
                textAlign: "center",
                opacity: 0 // 처음에 투명숨김
            }) ////////// css //////////////////

            // 4.애니메이션 등장하기 : 올라오면서 나타나기
            .animate({
                top: "50%",
                opacity: 1
            }, 1000, "easeInOutQuart");



    }; //////////// banTit 함수 ///////////////////////
    //////////////////////////////////////////////////

    // banTit함수 최초호출!
    setTimeout(banTit, 2000);



    // 마우스 팔로워 플러그인 적용하기
    // 움직일 대상: .btna
    // 설정범위는 움직일 대상이 포함된 부모요소

    $(".btna").mousefollower();
    // 주의사항!
    // mousefollower() 메서드를 적용하는 것은
    // 마우스 따라다닐 범위 요소를 선택하는 것이다!
    // 그 안에 .badge 라는 것이 실제로 따라다닌다!
    // 클래스명 badge를 이 플러그인의 설정에 따라
    // 반드시 사용해야 한다!

    $(".btna").hover(
            function () { // over

                // 흰원 나타나기
                $(".inside", this).css({
                    transform: "scale(1)"
                }); //// css ////////////

                // 글자 나타나기
                $(".bbtit", this).css({
                    transform: "translate(-50%, -50%) scale(1)"
                })

            },
            function () { // out

                // 흰원 사라지기
                $(".inside", this).css({
                    transform: "scale(0)"
                }); //// css ////////////

                // 글자 사라지기
                $(".bbtit", this).css({
                    transform: "translate(-50%, -50%) scale(0)"
                })

            }) ///// hover ///////////

        // .btna 클릭시 (위에서 셋팅 이어짐!)
        .click(function () {

            // 광클막기! /////////////////
            if (btna_sts) return false;
            btna_sts = 1; //잠금
            setTimeout(function () {
                btna_sts = 0;
                //1.5초(애니시간)후 해제
            }, 1500); //// setTimeout ////

            // 배너자동호출 지우기
            clearAuto();

            // 왼쪽버튼 여부(클래스 ar1으로 확인)
            let isAR1 = $(this).is(".ar1");

            if (isAR1) {
                //console.log("난,왼쪽!");
                goRight();
            } ///// if문 ///////////
            else {
                //console.log("난,오른쪽!");
                autoSlide();
            } ///// else ////////////////


        }); /////// click ////////////////////

    // 버튼 광클릭막기 상태값
    let btna_sts = 0; //1-막기,0-허용




}); ////////// jQB //////////////////////
