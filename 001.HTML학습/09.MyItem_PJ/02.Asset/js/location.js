// 오시는길 페이지 JS - location.js ////

$(function(){ /// jQB //////////////////
    
    /// 지도 메뉴 클릭시 지도변경하기 //
    $(".menu a").click(function(e){//e-이벤트전달변수
        
        // 기본이동막기
        e.preventDefault();
        
        // 1. 클릭된 a요소의 순번알아오기
        let idx = $(this).index();
        console.log("순번:"+idx);
        
        // 2. a요소의 순번과 같은 번호의 .maps요소 보이기
        $(".maps").eq(idx).show()
        .siblings().hide();
        
        // 3. 맵메뉴 class변경하기
        $(this).addClass("on")
        .siblings().removeClass("on");
        
        
    });/////////// click ////////////
    
    
    
    
});////////// jQB //////////////////////

