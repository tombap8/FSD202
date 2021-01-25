//// 쇼핑몰 JS - main.js /////

///// 로드구역 //////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!");

        // 이동버튼 클릭시 슬라이드 넘기기 /////
        // 클릭 이벤트 대상: .abtn

        // 이동버튼
        var btn = document.querySelectorAll('.abtn');
        console.log("버튼개수:" + btn.length);

        // 왼쪽버튼
        btn[0].onclick = function () {
            console.log("왼쪽이양!");
            
            // 자동넘김지우기
            clearAuto();

            //이동함수 호출
            goSlide(0);

            // a태그 기본이동 막기!
            return false;

        }; ///// click /////////////////////

        // 오른쪽버튼
        btn[1].onclick = function () {
            console.log("오른쪽이양!");
            
            // 자동넘김지우기
            clearAuto();


            //이동함수 호출
            goSlide(1);

            // a태그 기본이동 막기!
            return false;

        }; ////// click ////////////////////

        // 슬라이드번호 /////////////
        var snum = 0; //첫페이지는 0
        /*////////////////////////////////////////////
            함수명: goSlide
            기능: 슬라이드가 넘어가도록 기능구현함
        */ ////////////////////////////////////////////
        var goSlide = function (dir) {

            console.log("방향구분:" + dir);

            // 1. 버튼별 슬라이드번호 증감!
            if (dir) { // dir이 1일때 true : 오른쪽버튼
                snum++; //1씩증가
                if (snum === 5) snum = 0; //한계수
            } /////// if ///////////////////////
            else { // dir이 0일때 : 왼쪽버튼
                snum--; //1씩감소
                if (snum < 0) snum = 4; //한계수
            } /////// else ///////////////////////

            console.log("슬라이드번호:" + snum);


            // 2.슬라이드 이동하기
            var tg = document.querySelector('#slide');
            tg.style.left = (-100 * snum) + "%";
            tg.style.transition = "left .8s ease-out";

            // 3.블릿변경하기
            // 원리: 슬라이드 순번과 같은 순서의 블릿li에 
            // class="on"을 줘서 회색이미지가 보이도록 한다!
            // 블릿박스 : .indic li
            var indic = document.querySelectorAll('.indic li');

            // 블릿 li에 class초기화(모두지우기)
            for (var x of indic) {
                x.classList.remove("on");
            } ///// for of문 /////////////

            // 슬라이드 순번과 같은 블릿 li에 class 넣기
            indic[snum].classList.add("on");

        }; ////// goSlide함수 ///////////////////////////
        ///////////////////////////////////////////////



        // 인터발함수(지우기위해 만든변수)
        var autoI;
        /*////////////////////////////////////////////
            함수명: autoSlide
            기능: 자동넘기기 셋팅함수(인터발함수)
        */ ////////////////////////////////////////////
        var autoSlide = function () {
            autoI = setInterval(function () {
                goSlide(1);
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
            autoT = setTimeout(autoSlide,5000);

        }; ////// clearAuto함수 /////////////////////////
        ///////////////////////////////////////////////


    }); /////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
