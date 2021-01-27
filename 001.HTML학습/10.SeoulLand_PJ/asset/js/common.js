// 서울랜드 공통 JS - common.js //

$(function(){/// jQB /////////////////////
    

    //////////////////////////////////////////
    //// 패밀리 사이트 선택박스 변경시 이동하기 /////
    // change 이벤트 대상: #fslink
    // 변경내용: 새창열고 사이트 이동하기
    // 선택박스의 선택을 변경할때 발생하는 이벤트:change
    ///////////////////////////////////////////////
    $("#fslink").change(function () {

        // 선택한 option 의 value값 읽어오기
        // val() - 선택값의 value 읽어오는 메서드
        let opt = $(this).val();
        console.log("선택값:" + opt);

        // 선택값이 "fs"가 아니면 새창 띄우기
        if (opt === "fs") return false;

        // 이동 url변수
        let url;
        // 경우 나누기
        switch (opt) {
            case "cal":
                url = "http://www.icpk.co.kr/";
                break;
            case "rose":
                url = "http://www.irosehill.co.kr/";
                break;
        } //// switch case /////////
        
        /// 새창열기 페이지 이동
        window.open().location.href = url;


    }); /////// change //////////////////



    
    
    
    
    
});/////////// jQB //////////////////////




/*//////////////////////////////////////
    함수명:showG
    기능: gnbline박스를 높이값 변경하기
*/ //////////////////////////////////////
function showG(hv) { //hv - 높이값 전달변수
    // 1. 함수호출 및 전달값 확인
    //console.log("나야나!" + hv);
    // 2. 변경대상: .gnbline
    var tg = document
        .getElementsByClassName("gnbline").item(0);
    //클래스요소는 순번을 반드시 쓴다!(첫번째는 0번!)

    // 3. 높이값 변경하기
    tg.style.height = hv + "px";

} ////// showG함수 ////////////////////
/////////////////////////////////////
