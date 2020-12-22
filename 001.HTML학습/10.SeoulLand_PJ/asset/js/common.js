// 서울랜드 공통 JS - common.js //

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
