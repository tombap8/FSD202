// GNB 링크 시스템 JS - linksys.js

$(function () { /// jQB /////////////////////////

    console.log("로딩완료!");

    // 상단영역 링크 클릭시 페이지 이동하기
    // click 이벤트 대상: #top a
    $("#top a").click(function (e) {
        // e는 이벤트발생할때 함수내부로 전달하는
        // 이벤트 관련 전달변수
        e.preventDefault();
        // 기본기능 막기코드
        // a태그 같은 경우 이동속성을 막아준다!

        // 1. a태그의 글자읽어오기
        var txt = $(this).text().trim();
        // trim() 메서드 : 문자열 앞뒤공백제거
        // 트림(트름처럼 공기를 빼주는것!)
        console.log("텍스트:" + txt);

        // 2. 텍스트와 페이지연결하기
        // 이동주소
        var url;

        switch (txt) {
            case "Home":
                url = "index.html";
                break;
            case "디바이스":
                url = "item.html?inm=" + escape(txt);
                break;
            case "스마트폰":
                url = "item.html?inm=" + escape(txt);
                break;
            case "태블릿PC":
                url = "item.html?inm=" + escape(txt);
                break;
            case "노트북":
                url = "item.html?inm=" + escape(txt);
                break;
            case "패션":
                url = "item.html?inm=" + escape(txt);
                break;
            case "가방":
                url = "item.html?inm=" + escape(txt);
                break;
            case "시계":
                url = "item.html?inm=" + escape(txt);
                break;
            case "구두":
                url = "item.html?inm=" + escape(txt);
                break;
            case "프로필":
                url = "profile.html";
                break;
            case "회원가입":
                url = "member.html";
                break;
            case "로그인":
                url = "login.html";
                break;
            case "게시판":
                url = "board.html";
                break;
            case "오시는길":
                url = "location.html";
                break;
            case "트위터":
                url = "index.html";
                break;
            case "인스타그램":
                url = "index.html";
                break;
            case "페이스북":
                url = "index.html";
                break;
        } ///// switch case //////////





    }); //////// click //////////////



}); /////// jQB //////////////////////////////
//////////////////////////////////////////////
