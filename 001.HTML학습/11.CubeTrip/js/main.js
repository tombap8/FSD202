// 큐브 트립 메인 JS - main.js //

/// 로드구역 : html태그를 모두 그린 후 실행구역 /////
/// load이벤트는 img, video 등의 모든 컨텐츠 로딩후 실행함(시간걸림)
/// DOMContentLoaded 이벤트는 html태그만 그리면 바로실행(시간단축)
window.addEventListener("DOMContentLoaded",function(){
    
    // 1. 로드구역 확인
    console.log("로딩완료!");
    
    
});///////// 로드구역 //////////////////////////////////
//////////////////////////////////////////////////////

/*///////////////////////////////////////////
    함수명:chgCity
    기능:메뉴 클릭시 도시명에 맞게 큐브를 회전시키고 
         설명이 나오게함
*////////////////////////////////////////////
function chgCity(me){ // me - 클릭된 요소 자신
    
    // 0. 선택된 요소의 값담기
    var sv = me.innerText;
    
    // 1.함수호출확인, 전달값 확인
    console.log("나야나!"+sv);
    
    // 2.변경대상: .cube
    var tg = document.getElementsByClassName("cube")[0];
    // 클래스니까 선택후 몇번째 꼭해야함! .item(순번) 또는 [순번]
    
    // 3. 큐브도시에 맞게 회전하기
    if(sv==="출발"){
        tg.style.transform = "translate(-50%,-50%) rotateX(0deg) rotateY(0deg)";
    }
    else if(sv==="서울"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-90deg) rotateY(720deg)";
    }
    else if(sv==="런던"){
        tg.style.transform = "translate(-50%,-50%) rotateX(360deg) rotateY(-90deg)";
    }
    else if(sv==="베를린"){
        tg.style.transform = "translate(-50%,-50%) rotateX(-360deg) rotateY(90deg)";
    }
    else if(sv==="파리"){
        tg.style.transform = "translate(-50%,-50%) rotateX(720deg) rotateY(-180deg)";
    }
    else if(sv==="뉴욕"){
        tg.style.transform = "translate(-50%,-50%) rotateX(90deg) rotateY(-360deg)";
    }
    
    
        tg.style.transition = "all 1.5s ease-in-out";
    
}//////// chgCity 함수 ////////////////////////
////////////////////////////////////////////








