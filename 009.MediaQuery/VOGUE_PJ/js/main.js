// VOGUE PJ 메인 페이지 JS - main.js

$(function(){ // jQB ////////////
    
    console.log("로딩완료!");
    
    // 햄버거 버튼 클릭시 모바일 메뉴 보이기
    // 이벤트 대상: #ham
    // 변경 대상: .moshow
    // 변경 대상의 높이값은 내부에 있는 .mognb의 높이만큼
    // 변경해 준다!
    $("#ham").click(function(){
        
        // 높이값읽어오기
        var hv = $(".mognb").height();
        console.log("현재높이값:"+hv);
        
        $(".moshow").css({
            height: hv+"px"
        });///// css ////////
        
    });///// click ////////////
    
    
    
});/// jQB /////////////////////////////
////////////////////////////////////////
