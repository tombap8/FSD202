// 브라우저 다운로드 사이트 메인 JS - main.js 

$(function () { /// jQB //////////////////

    // 햄버거 버튼 클릭시 메뉴 들어오기
    $("#ham").click(function () {

        // 햄버거버튼(자기자신) 숨기기
        $(this).hide();

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

        //// 닫기 버튼 이미지 넣기 ////
        $("body").append(
            '<img src="images/OB/close_.png" alt="닫기버튼" id="cbtn">');

        // 닫기버튼
        let cbtn = $("#cbtn");

        // 닫기버튼 css ///
        cbtn.css({
            position: "absolute",
            display: "none", //처음에 안보임!
            zIndex: "9999999" // 가장위!
        }); /////// css //////////

        /// 커버영역 위에 올라가면 닫기버튼 이미지 보이기 ///
        $(".cvbx").hover(
                function () { /// over
                    cbtn.show(); //닫기버튼 보이기
                },
                function () { /// out
                    cbtn.hide(); //닫기버튼 숨기기
                })
            //////// hover /////////////////

            /// 위에서 이어짐(.cvbx)
            /// 커버영역 위에서 마우스가 움직일때 닫기버튼 따라다니기 //
            .mousemove(function (e) { // e-이벤트전달변수
                // e.pageX, e.pageY 화면에서의 커서위치값!
            
                let posx = e.pageX + 5;
                let posy = e.pageY + 5;
                // 5를 더한 이유는 닫기이미지가 
                // 커서아래에 오지 않게하여
                // .cvbx에 오버시 깜박거리는 현상을 없앤다!
            
                cbtn.css({
                    top: posy + "px",
                    left: posx + "px"
                }); ///// css ////////

            }); ///// mousemove ///////////////



    }); /////// click /////////////////



}); ////////// jQB //////////////////////
