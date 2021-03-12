// 브라우저 다운로드 사이트 메인 JS - main.js 

$(function () { /// jQB //////////////////

    // 햄버거 버튼 클릭시 메뉴 들어오기
    $("#ham").click(function () {

        // 메뉴 들어오기
        $(".gnb").animate({
            left: "0"
        }, 500, "easeInOutCubic");

        // 컨텐츠박스+상단박스(.stg) 오른쪽이동하기!
        $(".stg").animate({
            left: "300px"
        }, 500, "easeInOutCubic");

        // 메뉴 리스트 순서대로 들어오기
        // 대상: .gnb li 
        // 구현: li가 왼쪽에 나가있고 순서대로
        //      애니메이션 하여 원위치함
        //      이때 delay시간을 순서대로 증가시킴
        // 사용메서드: each()
        $(".gnb li").each(function (idx, ele) {
            // idx-요소순번, ele-요소자신
            //console.log(idx);
            // 애니전 delay시간은 
            // 0,100,200,300...순으로 셋팅됨!
            $(ele).delay(100 * idx)
                .animate({
                    left: "0"
                }, 600, "easeOutQuint");
            ///////// animate /////////

        }); //////// each ///////////////////

        /// 전체 영역 덮는 커버 넣기
        $("body").append('<div class="cvbx"></div>');
        // 커버셋팅
        $(".cvbx").css({
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            opacity: ".2",
            zIndex: "9999" // 상단영역보다 위
        }); //////// css //////////



    }); /////// click /////////////////



}); ////////// jQB //////////////////////
