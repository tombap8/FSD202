// 브라우저 다운로드 사이트 메인 JS - main.js 

$(function(){ /// jQB //////////////////
    
    // 햄버거 버튼 클릭시 메뉴 들어오기
    $("#ham").click(function(){
        
        // 메뉴 들어오기
        $(".gnb").animate({
            left: "0"
        }, 500,"easeInOutCubic");
        
        // 컨텐츠박스 오른쪽이동하기!
        $(".wrap").animate({
            left: "300px"
        }, 500,"easeInOutCubic");
        
        
        
    });/////// click /////////////////
    
    
    
});////////// jQB //////////////////////

